import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Polls } from '../api/polls.js';
import PollList from './polls/PollList.jsx';


class AllPolls extends React.Component {

   render() {
      return (
         <div>
            <h1>All Polls </h1>

		<PollList polls={this.props.polls}/>
    {this.props.children}
    
         </div>
      )
   }
}



AllPolls.propTypes = {
  polls: PropTypes.array.isRequired,
};

 

export default createContainer(() => {
  Meteor.subscribe('polls');
  return {
    polls: Polls.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, AllPolls);