import React from 'react';

import Request from '../../requests';

export default class PictureList extends React.Component {

    constructor() {
        super();

        this.state = {
            pictures: []
        };
    }

    componentWillMount() {
        Request.getAllPictures((response) => {
            this.setState({
                pictures: response.data
            });
        });
    }

    updatePictureDescription(description, picture) {
        picture.description = description;
        Request.updatePictureDescription(picture, (response) => {
            var currentPictures = this.state.pictures;
            currentPictures[currentPictures.indexOf(picture)] = response.data;
            this.setState({
                pictures: currentPictures
            });
        });
    }

    render() {
        return (
            <ul className="picture-list">
                <li className="pictureListHeading"><span>&mdash;Pictures&mdash;</span></li>
                {
                    this.state.pictures.map((picture, index) => {
                        return <li key={index}>
                                   <span>{picture.name}</span>
                                   <textarea onKeyPress={(e) => {
                                                e.target.style.backgroundColor = "#888888";
                                                if(e.key == "Enter") {
                                                    this.updatePictureDescription(e.currentTarget.value, picture);
                                                    e.target.style.backgroundColor = "white";
                                                }
                                             }}
                                             defaultValue={picture.description}
                                   />
                               </li>
                    })
                }
            </ul>
        );
    }
}