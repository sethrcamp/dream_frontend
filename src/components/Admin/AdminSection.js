import React from 'react';

import Request from '../../requests';

import Price from '../Services/Price';

export default class AdminSection extends React.Component {

    constructor() {
        super();

        this.state = {
            nameValue: "",
            priceValue: ""
        };

        this.addPrice = this.addPrice.bind(this);
        this.deletePrice = this.deletePrice.bind(this);
    }

    addPrice() {
        var data = {
            service_id: this.props.section.id,
            name: this.state.nameValue,
            price: this.state.priceValue
        };
        Request.addPrice(data, () => {
            this.props.getFormattedSections();
            var inputs = document.getElementsByClassName("newPrice:"+this.props.section.id)[0].getElementsByTagName("input");
            inputs[0].value = "";
            inputs[1].value = "";
        });
    }

    deletePrice(price) {
        Request.deletePrice(price, () => {
            this.props.getFormattedSections();
        });
    }

    deleteSection() {
        Request.deleteSectionAndPrices(this.props.section, () => {
            this.props.getFormattedSections();
        });
    }

    render() {
        return (
            <div className="adminSection">
                <h1 onClick={() => {
                        this.deleteSection();
                    }}
                >{this.props.section.name}</h1>
                <ul>
                    <li className={"newPrice:"+this.props.section.id}>
                        <input type="text"
                               placeholder="Name"
                               onChange={(e) => {
                                   this.setState({
                                       nameValue: e.currentTarget.value
                                   });
                               }}
                        />
                        <input type="text"
                               placeholder="Price"
                               onChange={(e) => {
                                   this.setState({
                                       priceValue: e.currentTarget.value
                                   });
                               }}
                        />
                        <section onClick={() => {
                                    this.addPrice();
                                 }}
                        >Add</section>
                    </li>
                    {
                        this.props.section.prices.map((price, index) => {
                            return <li key={index}
                                       className="priceLi"
                                   >
                                       <Price price={price} deletePrice={this.deletePrice}/>
                                   </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}