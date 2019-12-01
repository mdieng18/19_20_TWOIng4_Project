import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './Container/Home';
import Admin from './Container/Admin';

export default () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/admin" exact component={Admin}/>
    </Switch>
);
