import React, { Component, PropTypes } from 'react';
import NewPoll from './NewPoll.jsx';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Polls } from '../../api/polls.js';
import PollList from './PollList.jsx';



class MyPolls extends React.Component {
   render() {
      return (
         <div>
            <h1>My Polls </h1>
            <h3>My Polls Page</h3>
            <NewPoll />
           	<PollList polls={this.props.polls}/>
         </div>
      )
   }
}

MyPolls.propTypes = {
  polls: PropTypes.array.isRequired,
};

 

export default createContainer(() => {
  Meteor.subscribe('polls');
  return {
    polls: Polls.find({"owner" : Meteor.userId()}, { sort: { createdAt: -1 } }).fetch(),
  };
}, MyPolls);