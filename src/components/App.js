import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}