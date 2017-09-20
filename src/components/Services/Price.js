import React from 'react';

export default class Price extends React.Component {

    render() {
        return(
            <div className="price"
                 onClick={() => {
                     this.props.deletePrice(this.props.price);
                 }}
            >
                <span>{this.props.price.name}</span>
                <span>${this.props.price.price}</span>
            </div>
        );
    }
}