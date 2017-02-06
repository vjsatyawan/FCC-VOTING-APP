import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import { Button, Label } from 'semantic-ui-react';
import HeaderTop from './common/HeaderTop.jsx';
import Footer from './common/Footer.jsx';

 
// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div>
          <HeaderTop currentUser={this.props.currentUser}/>

                   {this.props.children}

          <Footer />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);