"use strict"
import React,{Component} from 'react';
import {Navbar,Nav,NavItem,Badge} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return　(   <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
            <LinkContainer to="/about">
        <NavItem  >About</NavItem>
            </LinkContainer>
        <NavItem  href="/contacts">Contacts</NavItem>
        
      </Nav>
      <Nav pullRight>
        <NavItem  href="/admin">Admin</NavItem>
        <NavItem  href="/cart"><Badge>1</Badge></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
  }
}
export default Menu;