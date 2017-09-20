import React from 'react';

import Photo from './Photo';

export default class Category extends React.Component {

    constructor() {
        super();

        this.state = {
            propsReceived: false,
            pictures: [],
            category: ""
        };

        this.getPictures = this.getPictures.bind(this);

    }

    getPictures() {
        var categoryName = this.props.match.params.category_id;
        Object.keys(this.props.pictures.categories).forEach((category) => {
            if(category == categoryName) {
                this.props.pictures.categories[category].forEach((picture) => {
                    var currentPictures = this.state.pictures;
                    currentPictures.push(picture);
                    this.setState({
                        pictures: currentPictures,
                        category: categoryName
                    });
                });
            }
        });
    }

    render() {
        if(!this.state.propsReceived && this.props.pictures.length != 0) {
            this.setState({
                propsReceived: true
            }, () => {
                this.getPictures();
            });
        }


        return(
            <div className="category">
                {
                    this.state.pictures.map((photo, index) => {
                        return <Photo key={index} index={index} photo={photo} category={this.state.category}/>;
                    })
                }
            </div>
        );
    }
}