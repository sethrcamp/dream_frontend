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
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!

                    </p>
                    <p>
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                    </p>
                    <p>
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                        I am a nice person, I like things!
                    </p>
                </div>
            </div>
        );
    }
}