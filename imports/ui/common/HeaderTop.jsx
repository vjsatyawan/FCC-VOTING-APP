import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu} from 'semantic-ui-react';
import AccountsUIWrapper from '../useraccount/AccountsUIWrapper.jsx';

export default class HeaderTop extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {

    this.setState({ activeItem: name })
    console.log(this.props.history);
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          
            <Link to="home">
               <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            </Link>

            <Link to="polls">
               <Menu.Item name='polls' active={activeItem === 'polls'} onClick={this.handleItemClick}/>
           </Link>


           { this.props.currentUser ?
           
           <Link to="mypolls">
               <Menu.Item name='mypolls' active={activeItem === 'mypolls'} onClick={this.handleItemClick}/>
           </Link>
          : ''
          }
           <Link to="about">
               <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
           </Link>

    {  1==0 ?

         <Link to="poll/asnkdna">
              <Menu.Item name='pollsds' active={activeItem === 'about'} onClick={this.handleItemClick}/>
          </Link>
     : ''
    }
            <Menu.Menu>          
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
            { this.props.currentUser ? "Hello  " : ''}
            <AccountsUIWrapper />
             </Menu.Item>

          </Menu.Menu>


        </Menu>


      </div>
    )
  }
}