import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import history from './history';
import HomePage from './Components/HomePage';
import Error from './Components/Error';
import CompletePost from "./Components/CompletePost";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/posts" component={CompletePost} />
                    <Route component={Error}/>
                    {/* <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}