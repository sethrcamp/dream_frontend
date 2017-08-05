import React from 'react';
import {withRouter} from 'react-router';

import logo from '../assets/logo.png';
import facebook from '../assets/DP_facebook.png';
import instagram from '../assets/instagram_white.svg';



class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <div>
                    <a className="logo" href="">
                        <img src={logo}/>
                    </a>
                    <ul className="navigation">
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
                    <a className="socialMedia" href="https://www.facebook.com/dreamesquephotography/" target="_blank">
                        <img src={facebook}/>
                    </a>
                    <a className="socialMedia" href="https://www.instagram.com/dreamesque_photography/" target="_blank">
                        <img src={instagram}/>
                    </a>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);