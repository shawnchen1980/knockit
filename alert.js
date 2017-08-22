import css from "./styles.css";
import React,{Component} from 'react';
import {render} from 'react-dom';
import classNames from 'classnames'
var func=()=>{alert(`this is ${css.myclass}`);}
func();
//var a=()=>(<div>hello</div>);
 /**class App extends React.Component {
  render() {
    return <h1>Hello, Gomix!</h1>
  }
}          */
//var App=()=>(<h1 className={css.myclass} >Hello, dddGomix!</h1>);
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state={text:this.props.text};
  }
  render(){
    return (<div><input value={this.props.text} onChange={(e)=>{this.props.onChange(e.target.value)}} />
<button onClick={(e)=>{e.preventDefault();this.props.mySubmit(this.props.text)}}>transmit me</button></div>)
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={text:"hello world",list:[],text1:"text1",text2:"text2",filter:"All"};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleDel=this.handleDel.bind(this);
    this.handleSubmit1=this.handleSubmit1.bind(this);
    this.handleSubmit2=this.handleSubmit2.bind(this);
    this.handleFilter=this.handleFilter.bind(this);
  }
  handleSubmit1(t){
    this.setState({text1:t});
  }
  handleSubmit2(t){
    this.setState({text2:t});
  }
  handleChange(e){
    this.setState({text:e.target.value,list:this.state.list,text1:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    //alert(this.state.text);
    this.setState({list:this.state.list.concat({title:this.state.text,completed:false}),text:""})
    console.log(this.state);
  }
  handleDel(i){
    
    return (e) =>{
            e.preventDefault();
      this.setState({list:[...this.state.list.slice(0,i),...this.state.list.slice(i+1)]});
    }
  }
  handleToggle(i){
    return (e) =>{
            e.preventDefault();
      var item=Object.assign({},this.state.list[i],{completed:!this.state.list[i].completed})
      this.setState({list:[...this.state.list.slice(0,i),item,...this.state.list.slice(i+1)]});
    }
  }
  handleFilter(filter){
    return (e)=>{
    this.setState({filter:filter});
    }
  }
  render(){
    return (<form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text}/>
            <input type='submit' value='submit me' />
            <ul>
            {this.state.list.map((item,index)=>(<li className={classNames({[css.completed]:item.completed,
                                                [css.incompleted]:!item.completed,
                                                [css.invisible]: ((this.state.filter=="Completed"&&!item.completed)||(this.state.filter=="Incompleted"&&item.completed))})} key={index}>{item.title}<button onClick={this.handleDel(index)}>del</button><button onClick={this.handleToggle(index)}>change</button></li>))}
            </ul>
<label><input name="filter" type="radio" onChange={this.handleFilter("All")} checked={this.state.filter=="All"}/>All</label>
<label><input name="filter" type="radio" onChange={this.handleFilter("Completed")} checked={this.state.filter=="Completed"}/>Completed</label>
<label><input name="filter" type="radio" onChange={this.handleFilter("Incompleted")} checked={this.state.filter=="Incompleted"}/>Incompleted</label>
  <MyComponent text={this.state.text1} mySubmit={this.handleSubmit2} onChange={this.handleSubmit1}/>
<MyComponent text={this.state.text2} mySubmit={this.handleSubmit1} onChange={this.handleSubmit2}/>
      </form>);
  }
}
render(<App />,document.getElementById("app"));