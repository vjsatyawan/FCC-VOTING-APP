import { Grid } from 'semantic-ui-react'
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';



class PollContainer extends React.Component {

   render() {

      return (

					   <Grid divided>
					    <Grid.Row>
					     <Grid.Column width={8}>

					     		Poll Container : 

					     		{this.props.params.poll_id}
					            </Grid.Column>

					             <Grid.Column width={8}>
					                  Chart
					             </Grid.Column>
					          </Grid.Row>
					         </Grid>


      );
   }
}



export default PollContainer;