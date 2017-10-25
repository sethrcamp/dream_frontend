import React from 'react';

import {BASE_PATH} from '../../conf/conf';

export default class Gallery extends React.Component {

    constructor() {
        super();

        this.findMainPicture = this.findMainPicture.bind(this);
    }

    findMainPicture(category) {
        var returnValue = "";
        var pictures = this.props.pictures.categories[category];
        pictures.forEach((picture) => {
            var regex = new RegExp(/^MAIN/);
            if(regex.test(picture.name)) {
                returnValue = BASE_PATH+"categories/"+category+"/"+picture.name;
            }
        });
        return returnValue;
    }

    render() {
        if(this.props.pictures.length == 0)
            return null;
        return(
            <div className="gallery">
                {
                    Object.keys(this.props.pictures.categories).filter((category) => {
                        return category.id != -1;
                    }).map((category, index) => {
                        return <a href={"#gallery/"+category} key={index}>
                                   <h1>{category}</h1>
                                   <img src={this.findMainPicture(category)}/>
                               </a>
                    })
                }
            </div>
        );
    }
}