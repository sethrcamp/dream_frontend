import React from 'react';
import {withRouter} from 'react-router';

import logo from '../assets/logo.png';
import facebook from '../assets/DP_facebook.png';
import instagram from '../assets/instagram_white.svg';
import hamburger from '../assets/hamburger.png';


class HamburgerMenu extends React.Component {

    render() {
        return (
            <div className="hamburger-all">
                <div className={this.props.open ? "hamburger-menu" : "closed"}>
                    <div>
                        <a className="hamburger-logo" href="">
                            <img src={logo}/>
                        </a>
                        <ul onClick={() => {
                                this.props.closeHamburgerMenu();
                            }}
                        >
                            <li>
                                <a href="#bio" className={this.props.history.location.pathname == "/bio" ? "selected" : null}>Bio</a>
                            </li>
                            <li>
                                <a href="#gallery" className={this.props.history.location.pathname.indexOf("/gallery") != -1 ? "selected" : null}>Gallery</a>
                            </li>
                            <li>
                                <a href="#services" className={this.props.history.location.pathname == "/services" ? "selected" : null}>Services</a>
                            </li>
                            <li>
                                <a href="#contact" className={this.props.history.location.pathname == "/contact" ? "selected" : null}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>dreamesquephotography@gmail.com</span>
                        <div>
                            <a className="hamburger-social-media" href="https://www.facebook.com/dreamesquephotography/" target="_blank">
                                <img src={facebook}/>
                            </a>
                            <a className="hamburger-social-media" href="https://www.instagram.com/dreamesque_photography/" target="_blank">
                                <img src={instagram}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={this.props.open ? "hiddenClick" : "closed"}
                     onClick={() => {
                        this.props.closeHamburgerMenu();
                     }}
                ></div>
            </div>
        );
    }

}

export default withRouter(HamburgerMenu);