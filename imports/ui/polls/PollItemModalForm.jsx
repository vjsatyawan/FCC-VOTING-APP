import { List, Grid, Button, Header,Icon, Modal, Message, Form, Divider, Segment} from 'semantic-ui-react';
import React from 'react';
import { Polls } from '../../api/polls.js';
import { Meteor } from 'meteor/meteor';


class PollItemModalForm extends React.Component {
        
  state = { formData: {} }

  handleSubmit = (e, { formData }) => {
          e.preventDefault();

            const _id = formData.pollId;
            const choice = formData.choice;
            const answers = this.props.poll.answers;

            newChoiceValue = this.props.poll.answers.length;
            
            if(!formData.newChoice){
                answers[formData.choice].votes = answers[formData.choice].votes + 1;
            }
            else{
                answers[newChoiceValue] = {text: formData.newChoice, value: newChoiceValue, votes:1};
           };
           
          Meteor.call('polls.addVote', _id, answers);

           this.setState({ formData })
  
  }

  render() {
    const { formData} = this.state
 

      return (
                 
                  <Form onSubmit={this.handleSubmit}>

                     <input name='pollId' type="hidden" value={this.props.poll._id}></input>
                     
                        <Segment padded>
                          <Form.Select placeholder='Select your Choice' name='choice' options={this.props.poll.answers} value={this.props.poll.answers._id}/>
                          <Divider horizontal>Or</Divider>
                          <input placeholder='Or Add Choice' name='newChoice'/>
                          <input type="hidden" value={this.props.poll.answers.length} name='choiceValue'/>
                         </Segment>

                             <Button primary type='submit'>Submit</Button>

                             <Message>
                               <pre>formData: {JSON.stringify(formData, null, 2)}</pre>
                             </Message>

                  </Form>
      );
   }
}



export default PollItemModalForm;