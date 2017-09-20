import React from 'react';

import Section from './Section';

import Request from '../../requests';

export default class Services extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: []
        };
    }

    componentWillMount() {
        Request.getFormattedServices((response) => {
            this.setState({
                sections: response.data
            });
        });
    }

    render() {
        return(
            <div className="services">
                <ul>
                {
                    this.state.sections.map((section, index) => {
                        return <li key={index}><Section section={section}/></li>
                    })
                }
                </ul>
            </div>
        );
    }
}