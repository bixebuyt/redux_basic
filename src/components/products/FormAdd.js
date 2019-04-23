import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleForm, handleAdd } from './../../actions/index';
import _ from 'lodash';

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            id: '',
            image: '',
            name: '',
            ram: '',
            price: '',
        }
    }
    componentWillMount() {
        let {idEdit, arrayProducts} = this.props;
        if(idEdit !== '') {
            let itemEdit = arrayProducts.filter((item) => {
                return item.id === idEdit
            })[0];
            let indexEdit = _.findIndex(arrayProducts, function(o) { return o.id === idEdit; });
           
            this.setState({
                ...itemEdit,
            })
            // arrayProducts[indexEdit] = this.state.itemEdit;
            console.log(arrayProducts[indexEdit]);
        }
    }
    // get value input khi nhap //
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toogleForm = () => {
        this.props.dispatch(toogleForm())
    }
    // send data to reducer //
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAdd(this.state));
    }
    render() {
        return (
            <div className="container toogleformadd">
                <h1>Add Product</h1>
                <form className="col-md-6" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" defaultValue={this.state.image} onChange={this.handleChange} name="image" className="form-control" id="image" placeholder="Image"/>
                        <br />
                        <label htmlFor="name">Name</label>
                        <input type="text" defaultValue ={this.state.name} onChange={this.handleChange} name="name" className="form-control" id="name" placeholder="Name"/>
                        <br />
                        <label htmlFor="ram">Ram</label>
                        <input type="text" defaultValue={this.state.ram} onChange={this.handleChange} name="ram" className="form-control" id="ram" placeholder="Ram"/>
                        <br />
                        <label htmlFor="price">Price</label>
                        <input type="text" defaultValue={this.state.price} onChange={this.handleChange} name="price" className="form-control" id="price" placeholder="Price"/>
                    </div>     
                    <button type="submit" className="btn btn-success">Submit</button>&nbsp;
                    <button onClick={this.toogleForm} type="button" className="btn btn-warning">Close Form</button>
                </form>
            </div>            
        );
    }
}

let mapStateToProps = (state) => {
    return {
        idEdit: state.idEdit,
        arrayProducts: state.arrayProducts
    }   
}

export default connect(mapStateToProps)(FormAdd);

