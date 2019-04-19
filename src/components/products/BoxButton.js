import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleEdit, handleDelete } from './../../actions/index';
class BoxButton extends Component {
    handleDelete = (id) => {
        this.props.dispatch(handleDelete(id));
    }
    handleEdit = () => {
        this.props.dispatch(toogleEdit());
    }
    render() {
        let { toggleFormEdit } = this.props;
        let itemFormEdit = '';
        if ( toggleFormEdit ) {
            itemFormEdit =                
                <form className="box_submit">                          
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-9">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>                         
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3">
                        <button type="button" className="btn btn-success">Save</button>
                    </div>  
                </form>
        }else {
            toggleFormEdit = '';
        }
        let {id} = this.props;
        return (
            <div className="box_button text-center">
                <button type="button" onClick={this.handleEdit} className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(id)}>Delete</button>
                { itemFormEdit }
            </div>  
        );
    }
}

let mapStateToProps = (state) => {
    return {
        toggleFormEdit: state.toggleFormEdit
    }   
}

export default connect(mapStateToProps)(BoxButton);