import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
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