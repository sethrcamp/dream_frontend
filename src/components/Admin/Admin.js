import React from 'react';

import Messages from './Messages';
import PictureList from './PictureList';
import ServiceList from './ServiceList';

import Request from '../../requests';

export default class Admin extends React.Component {

    constructor() {
        super();

        this.state = {
            passwordCorrect: false
        };
    }

    componentWillMount() {
        var password = window.prompt("Enter your password:");
        Request.verifyAdmin(password, (response) => {
            var isVerified = response.data.verified;
            console.log(isVerified);
            if(isVerified) {
                this.setState({
                    passwordCorrect: true
                });
            }
        });

    }

    render() {
        if(this.state.passwordCorrect)
            return (
                <div className="admin">
                    <Messages/>
                    {/*<PictureList/>*/}
                    <ServiceList/>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}