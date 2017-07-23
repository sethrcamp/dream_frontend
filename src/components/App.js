import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import Contact from './Contact/Contact';

import '../css/index.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bio/" component={Bio}/>
                    <Route path="/gallery/" component={Gallery}/>
                    <Route path="/services/" component={Services}/>
                    <Route path="/contact/" component={Contact}/>
                </Switch>
            </div>
        );
    }
}