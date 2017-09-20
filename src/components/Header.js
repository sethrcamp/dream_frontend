import React from 'react';
import {withRouter} from 'react-router';

import logo from '../assets/logo.png';
import facebook from '../assets/DP_facebook.png';
import instagram from '../assets/instagram_white.svg';
import hamburger from '../assets/hamburger.png';
import HamburgerMenu from './HamburgerMenu';


class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            expandHamburger: false
        };

        this.closeHamburger = this.closeHamburger.bind(this);
    }

    closeHamburger() {
        this.setState({
            expandHamburger: false
        });
    }

    render() {
        return(
            <div className="header">
                <div className="main-header">
                    <ul className="navigation">
                        <li>
                            <a href="#bio" className={this.props.history.location.pathname == "/bio" ? "selected" : null}>Bio</a>
                        </li>
                        <li>
                            <a href="#gallery" className={this.props.history.location.pathname.indexOf("/gallery") != -1 ? "selected" : null}>Gallery</a>
                        </li>
                        <li>
                            <a className="logo" href="">
                                <img src={logo}/>
                            </a>
                        </li>
                        <li>
                            <a href="#services" className={this.props.history.location.pathname == "/services" ? "selected" : null}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" className={this.props.history.location.pathname == "/contact" ? "selected" : null}>Contact</a>
                        </li>
                    </ul>
                    <a className="socialMedia" href="https://www.facebook.com/dreamesquephotography/" target="_blank">
                        <img src={facebook}/>
                    </a>
                    <a className="socialMedia" href="https://www.instagram.com/dreamesque_photography/" target="_blank">
                        <img src={instagram}/>
                    </a>
                </div>
                <div className="mobile-header">
                    <img className="hamburger" src={hamburger} onClick={() => {
                        this.setState({
                            expandHamburger: true
                        });
                    }}/>
                    <HamburgerMenu open={this.state.expandHamburger} closeHamburgerMenu={this.closeHamburger}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);