import React, { Component } from 'react';
import Item from './Item';
import FormAdd from './FormAdd';
import { toogleForm } from './../../actions/index';
import { connect } from 'react-redux';

class Product extends Component {
    // toogle form add item //
    toogleForm = () => {
        this.props.dispatch(toogleForm())
    }
    // show list item product //
    mappingItem = () => {        
        const mappingItem = this.props.arrayProducts.map((val, key) => {
            return <Item 
                    key={val.id}
                    index={key}
                    id={val.id}
                    ram={val.ram}
                    price={val.price}
                    img={val.img} >
                    {val.name}</Item>;
        });
        return mappingItem;
    }
    render() {
        let sttFormAdd = this.props.toogleForm;
        return (
            <div className="container">  
                { (sttFormAdd)?
                <FormAdd hanldeCloseFormAdd={this.hanldeCloseFormAdd} />:
                         <button type="button" onClick={this.toogleForm} className="btn btn-success">Add Product</button> }
                <div className="row">             
                    { this.mappingItem() }
                </div>           
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        arrayProducts: state.arrayProducts,
        toogleForm: state.toogleForm
    }   
}

export default connect(mapStateToProps)(Product);