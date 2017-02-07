import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import Home from '../../ui/Home.jsx';
import MyPolls from '../../ui/polls/MyPolls.jsx';
import About from '../../ui/About.jsx';
import PollContainer from '../../ui/polls/PollContainer.jsx';
import AllPolls from '../../ui/AllPolls.jsx';


export const renderRoutes = () => (
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "mypolls" component = {MyPolls} />
         <Route path = "polls" component = {AllPolls} />
        //<Route path="/poll/:poll_id" component = {PollContainer} />
	    <Route path = "about" component = {About} />
      </Route>
   </Router>
);

