import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="box clearfix">
                <div className="box_img col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <p><img src={'/assets/images/img_1.png'} alt="" /></p>
                    </div>
                    <div className="box_info text-center col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <p className="text-info">{this.props.name}</p>
                    <p className="text-muted">{this.props.ram}</p>
                    <p className="text-danger">{this.props.price}</p>
                    <div className="box_button text-center">
                        <button type="button" className="btn btn-primary">Add To Cart</button>&nbsp;
                        <button type="button" className="btn btn-danger">More Info</button>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Box;