"use strict"
import React,{Component} from 'react';
import Menu from './menu';
import Footer from './footer';
class Main extends Component{
  render(){
    return (<div><Menu />{this.props.children}<Footer /></div>);
  }
}
export default Main;