import React, { Component } from 'react';

class FormAdd extends Component {
    toogleFormAdd = () => {
        this.props.hanldeCloseFormAdd()
    }
    render() {
        return (
            <div className="container">
                <h1>Add Product</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="name" className="form-control" id="Name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=" Email1msg">Message:</label>             
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" id="yesno"/> Yes / No</label>
                    </div>        
                    <button type="submit" className="btn btn-info">Submit Information</button>&nbsp;
                    <button onClick={this.toogleFormAdd} type="button" className="btn btn-warning">Warning</button>
                </form>
            </div>            
        );
    }
}


export default FormAdd;

