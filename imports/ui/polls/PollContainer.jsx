import { List,Header, Modal, Button, Grid, Confirm} from 'semantic-ui-react';

import React, { Component, PropTypes } from 'react';
import PollListItemModel from './PollListItemModel.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Polls } from '../../api/polls.js';



class PollContainer extends React.Component {
state = { poll: { "_id" : "fWgfudo3d5Fdc7hj6", "username" : "Satyawan Jagankar", "question" : "Sehwag or Viru", "answers" : [ { "text" : "ss", "value" : 0, "votes" : 2 }, { "text" : "sds", "value" : 1, "votes" : 1 } ]}

 }



     componentDidMount() {
     console.log("State : " +this.state.poll);  

   }


  renderPoll() {

              return this.props.polls.map((poll) => (
                  ( poll._id == this.props.params.pollID)  ? 
                        <PollListItemModel key={poll._id} poll={poll} /> :             
                        console.log("NOt found")                       
                  
                ));

  }



   render() {

      return (

			
 		    <div>
          {JSON.stringify(this.props.polls[0])}
          <br/>
          {JSON.stringify(this.props.polls[1])}
          <br/>
          {JSON.stringify(this.props.polls[2])}
          <br/>

           {this.renderPoll()}
 		    </div>


      );
   }
}



PollContainer.propTypes = {
  polls: PropTypes.array.isRequired,
};

 

export default createContainer(() => {
  Meteor.subscribe('polls');
  return {
    polls: Polls.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, PollContainer);