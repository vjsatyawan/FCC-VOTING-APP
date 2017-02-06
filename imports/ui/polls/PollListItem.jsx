import { List,Header, Modal, Button, Grid, Confirm} from 'semantic-ui-react';
import React from 'react';
import PollListItemModel from './PollListItemModel.jsx';
import { Polls } from '../../api/polls.js';
import { Meteor } from 'meteor/meteor';

class PollListItem extends React.Component {

     constructor(props) {
      super(props);
    
      this.state = {
        open: false, 
        openConfirm : false 
      }
   }

    showPollModal = (size) => () => { this.setState({ size, open: true }) };

    close = () => this.setState({ open: false })  

    deletePoll = (_id) => () => { 
      console.log("remove poll");
      Meteor.call('polls.remove', _id);

    };

    confirmDelete = () => this.setState({ openConfirm: true });

    handleConfirmDelete = () => {
              console.log("remove poll");
              Meteor.call('polls.remove', this.props.poll._id);
              this.setState({ openConfirm: false });
      };

    handleCancelDelete = () => this.setState({ openConfirm: false })


   render() {

    const { open, size } = this.state

      return (

            <List.Item>
              <Grid>
                  <Grid.Row>

                 <Grid.Column width={12} floated='left'>
                  
                  <List.Content onClick={this.showPollModal('small')}>
                    <List.Header as='a'>{this.props.poll.question}</List.Header>
                    <List.Description as='a'>Poll Created By: {this.props.poll.username}</List.Description>
                  </List.Content>

                 </Grid.Column>
                  
                  <Grid.Column width={4} floated='right'>
                   { (Meteor.userId()===this.props.poll.owner) ?
                  <List.Content floated='right'>
                    <Button onClick={() =>this.confirmDelete()}>Delete This</Button>
                    <Confirm
                      open={this.state.openConfirm}
                      content='Are you sure you want to delete this poll'
                      onCancel={this.handleCancelDelete}
                      onConfirm={this.handleConfirmDelete}
                    />
                  </List.Content>
                  : " "
                }
                </Grid.Column>

          </Grid.Row>
          </Grid>
          <Modal size={size} open={open} onClose={this.close} closeIcon='close'>
              <PollListItemModel poll = {this.props.poll} />
        </Modal>

            </List.Item>
  
      );
   }
}

export default PollListItem;