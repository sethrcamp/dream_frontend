import React from 'react';

import Price from './Price';

export default class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <h1>{this.props.section.name}</h1>
                <ul>
                    {
                        this.props.section.prices.map((price, index) => {
                            return <li><Price key={index} price={price}/></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}