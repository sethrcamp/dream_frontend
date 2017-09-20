import React from 'react';

import Request from '../../requests';

import AdminSection from './AdminSection';

export default class ServiceList extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [],
            newGroupValue: ""
        };

        this.addSection = this.addSection.bind(this);
        this.getFormattedSections = this.getFormattedSections.bind(this);
    }

    componentWillMount() {
        this.getFormattedSections()
    }

    getFormattedSections() {
        Request.getFormattedServices((response) => {
            this.setState({
                sections: response.data
            });
        });
    }

    addSection() {
       Request.addSection(this.state.newGroupValue, () => {
           this.getFormattedSections();
       });
    }

    render() {
        return (
            <ul className="service-list">
                <li className="serviceListHeading"><span>&mdash;Services&mdash;</span></li>
                <li className="newGroup">
                    <input type="text"
                           placeholder="New Category"
                           onChange={(e) => {
                               this.setState({
                                   newGroupValue: e.currentTarget.value
                               });
                           }}
                    />
                    <section onClick={() => {
                                document.getElementsByClassName("newGroup")[0].getElementsByTagName("input")[0].value = "";
                                this.addSection();
                             }}
                    >Add</section>
                </li>
                {
                    this.state.sections.map((section, index) => {
                        return <li key={index}>
                                   <AdminSection section={section}
                                                 getFormattedSections={this.getFormattedSections}
                                   />
                               </li>
                    })
                }
            </ul>
        );
    }

}