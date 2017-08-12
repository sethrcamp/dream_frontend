import React from 'react';

import Section from './Section';

export default class Services extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    name: "Hourly",
                    prices: [
                        {
                            name: "1 Hour",
                            price: "30"
                        },{
                            name: "2 Hours",
                            price: "50"
                        },{
                            name: "3 Hours",
                            price: "60"
                        }
                    ]
                 },{
                    name: "Senior Photos",
                    prices: [
                        {
                            name: "1 outfit",
                            price: "20"
                        },{
                            name: "2 outfits",
                            price: "35"
                        },{
                            name: "3 outfits",
                            price: "50"
                        }
                    ]
                },{
                    name: "Large Events",
                    prices: [
                        {
                            name: "1/2 Day",
                            price: "250"
                        },{
                            name: "All Day",
                            price: "400"
                        }
                    ]
                },{
                    name: "Specials",
                    prices: [
                        {
                            name: "2 Hours w/Book",
                            price: "75"
                        },{
                            name: "1 Hour w/20 Prints",
                            price: "45"
                        },{
                            name: "All Day Event w/Unlimited Prints",
                            price: "750"
                        }
                    ]
                },{
                    name: "A La Carte",
                    prices: [
                        {
                            name: "1 Print",
                            price: "4"
                        },{
                            name: "20 Print Book",
                            price: "30"
                        },{
                            name: "50 Digital Downloads",
                            price: "50"
                        },{
                            name: "Rush Printing",
                            price: "25"
                        }
                    ]
                }
            ]
        };
    }

    render() {
        return(
            <div className="services">
                <ul>
                {
                    this.state.sections.map((section, index) => {
                        return <li><Section key={index} section={section}/></li>
                    })
                }
                </ul>
            </div>
        );
    }
}