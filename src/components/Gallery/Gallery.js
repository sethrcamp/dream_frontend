import React from 'react';

import {BASE_PATH} from '../../conf/conf';

export default class Services extends React.Component {

    constructor() {
        super();

        this.state = {
            categories: [
                {
                    id: 0,
                    name: "Senior",
                    icon: "kitty_1_1.jpeg"
                },
                {
                    id: 1,
                    name: "Wedding",
                    icon: "kitty_1_1.jpeg"
                },
                {
                    id: 2,
                    name: "Models",
                    icon: "kitty_1_1.jpeg"
                },
                {
                    id: 3,
                    name: "Engagement",
                    icon: "kitty_1_1.jpeg"
                },
                {
                    id: 4,
                    name: "Test",
                    icon: "kitty_1_1.jpeg"
                }
            ]
        };
    }

    render() {
        return(
            <div className="gallery">
                {
                    this.state.categories.map((category, index) => {
                        return <a href={"#gallery/"+category.id} key={index}>
                            <h1>{category.name}</h1>
                            <img src={BASE_PATH+category.icon}/>
                        </a>
                    })
                }
            </div>
        );
    }
}