import React from 'react';

import leftArrow from '../../assets/left_arrow.svg';
import rightArrow from '../../assets/right_arrow.svg';

import {BASE_PATH} from '../../conf/conf';

export default class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            selected: 0
        }
    }

    moveCarouselLeft = () => {
        if(this.state.selected == 0)
            this.setState({
                "selected": this.props.pictures.carousel.length-1
            });
        else
            this.setState({
                "selected": this.state.selected-1
            });
    };

    moveCarouselRight = () => {
        if(this.state.selected == this.props.pictures.carousel.length-1)
            this.setState({
                "selected": 0
            });
        else
            this.setState({
                "selected": this.state.selected+1
            });
    };

    render() {
        if(this.props.pictures.length == 0)
            return null;
        return(
            <div className="home">
                <div className="carousel">
                    <img className="arrowLeft" src={leftArrow} onClick={() => {this.moveCarouselLeft()}}/>
                    <img className="carouselImage" src={BASE_PATH+"carousel/"+this.props.pictures.carousel[this.state.selected].name}/>
                    <img className="arrowRight" src={rightArrow} onClick={() => {this.moveCarouselRight()}}/>
                </div>
                <div className="links">
                    <div>
                        <p>Learn more about the artist!</p>
                        <a href="#bio">
                            <img src={BASE_PATH+"bio_link/"+this.props.pictures.bio_link[0].name}/>
                            <h1>Bio</h1>
                        </a>
                    </div>
                    <div>
                        <p>Check out the gallery!</p>
                        <a href="#gallery">
                            <img src={BASE_PATH+"gallery_link/"+this.props.pictures.gallery_link[0].name}/>
                            <h1>Gallery</h1>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}