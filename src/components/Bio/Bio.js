import React from 'react';

import {BASE_PATH} from '../../conf/conf';

export default class Bio extends React.Component {
    render() {
        if(this.props.pictures.length == 0)
            return null;
        return(
            <div className="bio">
                <ul className="leftBio">
                    <li><img src={BASE_PATH+"bio_pic/"+this.props.pictures.bio_pic[0].name}/></li>
                    <li><span>Cody Hege</span></li>
                </ul>
                <div className="rightBio">
                    <p>
                        Cody is a 19 year old who was born and raised in the corn loving state of Indiana.
                        He graduated from Edgewood High School and then moved on to getting an associated degree in Business Administration.
                        Recently he packed up and moved to North Port Florida.
                        He currently works as a Brand Rep for Hollister and is a part time photographer.
                        He loves to adventure and make memories that last a lifetime.
                    </p>
                </div>
            </div>
        );
    }
}