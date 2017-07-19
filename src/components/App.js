import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Bio from './Bio/Bio';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bio/" component={Bio}/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}