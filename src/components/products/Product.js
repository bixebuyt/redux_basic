import React, { Component } from 'react';
import Item from './Item';
import FormAdd from './FormAdd';
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sttFormAdd: false
        }
    }
    // toogle form add item //
    toogleFormAdd = () => {
        this.setState({
            sttFormAdd: !this.state.sttFormAdd
        })
    }
    // close form add item //
    hanldeCloseFormAdd = () => {
        this.setState({
            sttFormAdd: false
        })
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
        let {sttFormAdd}= this.state;
        return (
            <div className="container">  
                { (sttFormAdd)?<FormAdd hanldeCloseFormAdd={this.hanldeCloseFormAdd} />:<button type="button" onClick={this.toogleFormAdd} className="btn btn-success">Success</button> }
                <div className="row">             
                    { this.mappingItem() }
                </div>           
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        arrayProducts: state.arrayProducts
    }   
}

export default connect(mapStateToProps)(Product);