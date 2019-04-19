import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Product extends Component {
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
        return (
            <div className="container">           
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