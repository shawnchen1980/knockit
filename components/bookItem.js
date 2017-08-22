import React from 'react';
import {Well,Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {addToCart} from '../actions/cartActions'
import {connect} from 'react-redux';
const BookItem=(props)=>(<Well>
                         <h6>title:{props.book.title}</h6>
                         <h6>price:{props.book.price}</h6>
                         <Button bsStyle="primary" bsSize="small" onClick={props.addToCart.bind(null,props.book)}>Add</Button>
                         </Well>);
function mapDispatchToProps(dispatch){
  return bindActionCreators({addToCart},dispatch);
}

export default connect(null,mapDispatchToProps)(BookItem);
                  