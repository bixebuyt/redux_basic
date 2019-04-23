import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleForm, handleDelete, handleEdit } from './../../actions/index';
class BoxButton extends Component {
    handleDelete = (id) => {
        this.props.dispatch(handleDelete(id));
    }
    handleEdit = (id) => {
        this.props.dispatch(toogleForm())
        this.props.dispatch(handleEdit(id))
    }
    render() {
        let {id} = this.props;
        return (
            <div className="box_button text-center">
                <button type="button" onClick={() => this.handleEdit(id)} className="btn btn-primary">Edit</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(id)}>Delete</button>
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