import React from 'react';

import leftArrow from '../../assets/left_arrow.svg';
import rightArrow from '../../assets/right_arrow.svg';

import {BASE_PATH} from '../../conf/conf';

export default class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [
                {"icon": "DP_example_1.jpg"},
                {"icon": "DP_example_2.jpg"},
                {"icon": "DP_example_3.JPG"},
                {"icon": "kitty_1_4.jpeg"},
                {"icon": "kitty_1_1.jpeg"}
            ],
            selected: 0
        }
    }

    moveCarouselLeft = () => {
        if(this.state.selected == 0)
            this.setState({
                "selected": this.state.images.length-1
            });
        else
            this.setState({
                "selected": this.state.selected-1
            });
    };

    moveCarouselRight = () => {
        if(this.state.selected == this.state.images.length-1)
            this.setState({
                "selected": 0
            });
        else
            this.setState({
                "selected": this.state.selected+1
            });
    };

    render() {
        return(
            <div className="home">
                <div className="carousel">
                    <img className="arrowLeft" src={leftArrow} onClick={() => {this.moveCarouselLeft()}}/>
                    <img className="carouselImage" src={BASE_PATH+this.state.images[this.state.selected].icon}/>
                    <img className="arrowRight" src={rightArrow} onClick={() => {this.moveCarouselRight()}}/>
                </div>
                <div className="links">
                    <div>
                        <p>I am a person. I do photos and stuff.</p>
                        <a href="#bio">
                            <img src={"http://localhost:8888/dream_frontend/src/assets/kitty_1_1.jpeg"}/>
                            <h1>Bio</h1>
                        </a>
                    </div>
                    <div>
                        <p>I am a person. I do photos and stuff.</p>
                        <a href="#gallery">
                            <img src={"http://localhost:8888/dream_frontend/src/assets/kitty_1_1.jpeg"}/>
                            <h1>Gallery</h1>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}