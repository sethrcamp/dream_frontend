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
                        Cody was born and raised in the corn loving state of Indiana.
                        Recently he packed up and moved to Venice Florida.
                        He is 19 years old and has an Associates degree in Business Administration.
                        He currently is a lifeguard and a part time photographer.
                        He loves to adventure and make memories that last a lifetime.
                    </p>
                </div>
            </div>
        );
    }
}