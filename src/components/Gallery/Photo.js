import React from 'react';

import {BASE_PATH} from '../../conf/conf';

export default class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                {
                    /*(this.props.index+1) % 2 == 0 &&
                    <img src={BASE_PATH+"categories/"+this.props.category+"/"+this.props.photo.name}/>*/
                }
                {/*<p className={(this.props.index+1) % 2 == 0 ? "leftText" : "rightText"}>{this.props.photo.description}</p>*/}
                {
                    /*(this.props.index+1) % 2 != 0 && */
                    <img src={BASE_PATH+"categories/"+this.props.category+"/"+this.props.photo.name}/>
                }
            </div>
        );
    }
}