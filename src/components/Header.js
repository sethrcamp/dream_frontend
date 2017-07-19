import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><a href="#">Logo</a></li>
                    <li><a href="#bio">Bio</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                </ul>
            </div>
        );
    }
}