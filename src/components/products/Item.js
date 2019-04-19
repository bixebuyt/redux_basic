import React, { Component } from 'react';
import Box from './Box';
import BoxButton from './BoxButton';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item col-xs-4 col-sm-4 col-md-4 col-lg-4">        
                <Box id={this.props.id}
                    name={this.props.children}
                    ram={this.props.ram}
                    price={this.props.price}
                    img={this.props.img} />
                <BoxButton id={this.props.id} />
            </div>               
        );
    }
}

export default Item;