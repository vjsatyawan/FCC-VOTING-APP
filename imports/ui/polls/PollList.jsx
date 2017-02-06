import React from 'react';
import PollListItem from './PollListItem.jsx';
import { List} from 'semantic-ui-react';

class PollList extends React.Component {


   render() {
      return (
         <div>
 
           <List divided relaxed>
               {this.props.polls.map((poll, i) => <PollListItem 
                  key = {i} poll = {poll}/>)}

            </List>
         </div>
      )
   }
}


export default PollList;
