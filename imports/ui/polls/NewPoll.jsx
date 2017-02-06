import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { Polls } from '../../api/polls.js';
import { Meteor } from 'meteor/meteor';

class NewPoll extends Component {
   
        state = { formData: {},
                  items: []

         }

        handleChange = (e, { value }) => this.setState({ value })

        handleSubmit = (e, { formData }) => {
          e.preventDefault();

       const question = formData.question;

        var answers = [];
        for (var i = 0; i < formData.choice.length; i++) {
            var newP = {text: formData.choice[i], value: i, votes :0};
             answers.push(newP);
          }

        Meteor.call('polls.insert', question, answers);

        this.setState({ formData }) ;

        }

  
        addItem = (e) => {
            
                  var itemArray = this.state.items;
                  console.log("Hello");

                 
                  itemArray.push(
                  {
                       item: this.inputChoice.value,
                       key: Date.now()
                  }
                    );
                 
                  this.setState({
                    items: itemArray
                  });


                this.inputChoice.value = "";
               
                e.preventDefault();
                  console.log(JSON.stringify(this.state.items));
        }




   render() {

          const { formData, value } = this.state

      return (


            <Grid centered columns={3}>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                      <Form.Field>
                        <input name="question" placeholder='Question' />
                      </Form.Field>
                      
              
              <Form.Group inline>
                    
                      <input name="addChoice" placeholder="enter task" ref={(a) => this.inputChoice = a}/>
                    
                   <Button type="button" onClick={this.addItem}>add</Button>

               </Form.Group>
            



                           {this.state.items.map((dynamicComponent, i) => <Choices key = {i} componentData = {dynamicComponent}/>)}


                      <Button type='submit'>Submit</Button>

                              <Message>
                               <pre>formData: {JSON.stringify(formData, null, 2)}</pre>
                             </Message>

              </Form>

              </Grid.Column>
             </Grid>           

  
      );
   }
}



class Choices extends Component {
   render() {
      return (
         <div>
             <Form.Checkbox label={this.props.componentData.item} name='choice' value={this.props.componentData.item} checked/>
         </div>
      );
   }
}



export default NewPoll;