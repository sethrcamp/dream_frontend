import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bio/" component={Bio}/>
                    <Route path="/gallery/" component={Gallery}/>
                    <Route path="/services/" component={Services}/>
                    <Route/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}