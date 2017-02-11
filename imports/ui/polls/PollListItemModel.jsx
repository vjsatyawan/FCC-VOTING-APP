import { Grid, Modal, Header, Button, Icon } from 'semantic-ui-react'
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

					          <Grid.Row>




					          		<div class="fb-share-button" data-href="http://localhost:3000/jEevPmphQnycvZtjQ" data-layout="button" data-size="large" data-mobile-iframe="true">		

					          			<a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2FjEevPmphQnycvZtjQ&amp;src=sdkpreparse">
					          			 <Button color='facebook'>
									      <Icon name='facebook' /> Share this Poll on Facebook
									    </Button>
					          			</a>					          					          		
									</div>
							
					          </Grid.Row>

					         </Grid>

	          </Modal.Content>
      );
   }
}



export default PollListItemModel;