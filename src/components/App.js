import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Category from './Gallery/Category';
import Admin from './Admin/Admin';

import Request from '../requests';

import '../css/index.css';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            pictures: []
        };
    }

    componentWillMount() {
        Request.updateDatabase(() => {
            Request.getFormattedPictures((response) => {
                this.setState({
                    pictures: response.data
                });
            });
        });
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/" render={(props) =>  <Home {...props} pictures={this.state.pictures}/>}/>
                    <Route path="/bio/" render={(props) =>  <Bio {...props} pictures={this.state.pictures}/>}/>
                    <Route path="/gallery/:category_id" render={(props) =>  <Category {...props} pictures={this.state.pictures}/>}/>
                    <Route path="/gallery/" render={(props) =>  <Gallery {...props} pictures={this.state.pictures}/>}/>
                    <Route path="/services/" component={Services}/>
                    <Route path="/contact/" component={Contact}/>
                    <Route path="/admin/" component={Admin}/>
                </Switch>
            </div>
        );
    }
}