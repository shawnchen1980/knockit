import React,{Component} from 'react';
import {Panel,Label,Row,Grid,Col,Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux';
class Cart extends Component {
  constructor(props){
    super(props);
    this.state={showModal:false};
  }
  close(){
    this.setState({showModal:false});
  }
  open(){
    this.setState({showModal:true});
  }
  render(){
    if(this.props.cart.length==0){
      return (<Panel>the cart is empty now</Panel>);
    }
    else {
      const modelDialog=( <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>total amount:{this.props.cart.map((item)=>(item.qty)).reduce((a,b)=>(a+b),0)}</p>
            <p>total price:{this.props.cart.map((item)=>(item.qty*item.price)).reduce((a,b)=>(a+b),0)}</p>
             </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>);
      const cartlist=this.props.cart.map((item)=>(<Panel key={item._id}>
        <Row>
          <Col xs={4}><h6>Title:{item.title}</h6></Col>
          <Col xs={4}>qty:<Label bsStyle="success">{item.qty}</Label></Col>
          <Col xs={4}><Button>+</Button><Button>-</Button><Button bsStyle="danger">delete</Button></Col>
        </Row></Panel>
                                                  )) 
      return (<Panel>{cartlist} {modelDialog} <Button bsStyle="success" onClick={this.open.bind(this)}>Proceed to Checkout</Button></Panel>)
    }
  }
}
            
function mapStateToProps(state) {
      return {cart:state.cart.cart};
    }

export default connect(mapStateToProps)(Cart);