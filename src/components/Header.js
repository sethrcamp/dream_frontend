import React from 'react';

import logo from '../assets/logo.png';
import facebook from '../assets/facebook_white.svg';
import instagram from '../assets/instagram_white.svg';

export default class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            selected: 0
        }
    }

    render() {
        return(
            <div className="header">
                <div>
                    <a href="">
                        <img src={logo}
                             onClick={() => {
                                 this.setState({"selected": 0})
                             }}
                        />
                    </a>
                    <ul className="navigation">
                        <li>
                            <a href="#bio"
                               className={this.state.selected == 1 ? "selected" : null}
                               onClick={() => {
                                   this.setState({"selected": 1})
                               }}
                            >Bio</a>
                        </li>
                        <li>
                            <a href="#gallery"
                               className={this.state.selected == 2 ? "selected" : null}
                               onClick={() => {
                                   this.setState({"selected": 2})
                               }}
                            >Gallery</a>
                        </li>
                        <li>
                            <a href="#services"
                               className={this.state.selected == 3 ? "selected" : null}
                               onClick={() => {
                                   this.setState({"selected": 3})
                               }}
                            >Services</a>
                        </li>
                        <li>
                            <a href="#contact"
                               className={this.state.selected == 4 ? "selected" : null}
                               onClick={() => {
                                   this.setState({"selected": 4})
                               }}
                            >Contact</a>
                        </li>
                    </ul>
                    <a href="https://www.facebook.com/dreamesquephotography/" target="_blank">
                        <img src={facebook}/>
                    </a>
                    <a href="https://www.instagram.com/dreamesque_photography/" target="_blank">
                        <img src={instagram}/>
                    </a>
                </div>
            </div>
        );
    }
}