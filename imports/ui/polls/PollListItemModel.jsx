import { Grid, Modal, Header} from 'semantic-ui-react'
import React from 'react';
import PollItemModalForm from './PollItemModalForm.jsx';
import ReChart from './ReChart.jsx';



class PollListItemModel extends React.Component {
   render() {

      return (


	          <Modal.Content>
					   <Grid divided>
					    <Grid.Row>
					     <Grid.Column width={8}>
					      <Modal.Description>
					        <Header>{this.props.poll.question}</Header>
					        <p>Put Something Here</p>
					                  
					        	<PollItemModalForm poll ={this.props.poll} />

					      </Modal.Description>


					            </Grid.Column>

					             <Grid.Column width={8}>
					                  <ReChart answers ={this.props.poll.answers}/>
					             </Grid.Column>
					          </Grid.Row>
					         </Grid>

	          </Modal.Content>
      );
   }
}



export default PollListItemModel;