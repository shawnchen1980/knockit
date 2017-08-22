import React from 'react'
import {Grid,Row,Col,Well} from 'react-bootstrap';
import BookItem from './bookItem'
import BookForm from './bookForm'
import Cart from './bookCart';
import {connect} from 'react-redux';
const BookPage=(props)=>(
  <Grid>
  <Row>
  <Col xs={12}>
  <Cart />
  </Col>
  </Row>
  <Row>
  <Col xs={12} sm={6}>
  <Well>
  here is the form
  <BookForm />
  </Well>
  </Col>
  <Col xs={12} sm={6}>
  <Well>
  here are the books
  
  {props.books.map((book)=>(<BookItem book={book} key={book._id} />))}
  
  </Well>
  </Col>
  </Row>
  </Grid>

)
const mapStateToProps=(state)=>{console.log(state);return {books:state.books.books}};
export default connect(mapStateToProps)(BookPage);