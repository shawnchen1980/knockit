import React , {Component} from 'react'
import {Panel,FormControl, FormGroup, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBook} from '../actions/bookActions';
import {findDomNode} from 'react-dom';
class BookForm extends Component{
  constructor(props){
    super(props);
  }
  handleSubmit(e){
    e.preventDefault();
    let book={_id:this._id.value,title:this.title.value,price:this.price.value};
    //console.log(this.title.value)
    this.props.addBook(book);
  }
  render(){
    const optionList=this.props.books.map((item)=>(<option key={item._id} value={item._id}>{item._id}</option>));
    return (
      <Panel>
      <FormGroup controlId="_id">
      <ControlLabel>_id</ControlLabel>
      <FormControl type="text" inputRef={(input)=>{this._id=input}}/>
      </FormGroup>
      <FormGroup controlId="title">
      <ControlLabel>title</ControlLabel>
      <FormControl type="text" inputRef={(input)=>{this.title=input}}/>
      </FormGroup>
      <FormGroup controlId="price">
      <ControlLabel>price</ControlLabel>
      <FormControl type="text" inputRef={(input)=>{this.price=input}}/>
      </FormGroup>
      <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)} >Add</Button>
        <Panel style={{marginTop:'15px'}}>
        <FormGroup controlId="del">
          <ControlLabel>book to delete</ControlLabel>
          <FormControl componentClass="select" placeholder="select" inputRef={(input)=>{this.del=this}}>
            <option value="select">select</option>
            {optionList}
          </FormControl>
        </FormGroup>
        <Button bsStyle="danger">Delete</Button>
        </Panel>
      </Panel>
    );
  }
}
const mapStateToProps=(state)=>({books:state.books.books});
const mapDispatchToProps=(dispatch)=>(bindActionCreators({addBook:addBook},dispatch));
export default connect(mapStateToProps,mapDispatchToProps)(BookForm);