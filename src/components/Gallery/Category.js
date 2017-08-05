import React from 'react';

import Photo from './Photo';

export default class Category extends React.Component {

    constructor() {
        super();

        this.state = {
            photos: [
                {
                    description: "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. ",
                    icon: "kitty_2_1.jpeg"
                },
                {
                    description: "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. ",
                    icon: "kitty_1_1.jpeg"
                },
                {
                    description: "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. ",
                    icon: "kitty_4_1.jpeg"
                },
                {
                    description: "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. " +
                    "This is a fine photo. ",
                    icon: "kitty_1_4.jpeg"
                }
            ]
        }
    }

    render() {
        return(
            <div className="category">
                {
                    this.state.photos.map((photo, index) => {
                        return <Photo key={index} index={index} photo={photo}/>;
                    })
                }
            </div>
        );
    }
}