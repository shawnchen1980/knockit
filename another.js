//import abc from "./styles.css";
import {createStore,combineReducers,applyMiddleware} from 'redux';
import bookReducer from "./reducers/bookReducer";
import cartReducer from './reducers/cartReducer';
import logger from 'redux-logger'
//console.log(abc.myclass);
const reducers=combineReducers({books:bookReducer,cart:cartReducer});
var middle=applyMiddleware(logger);
var store=createStore(reducers,middle);
import {Provider} from 'react-redux';
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import BookPage from './components/bookPage'
import Menu from './components/menu'
import Footer from './components/footer'
import Main from './components/main';
import About from './components/about';
import BookForm from './components/bookForm';
import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router';
//var App=(props)=>(<div>hello react!<Button bsStyle="primary">a button</Button></div>);

                  render(<Provider store={store}>
                         <Router history={hashHistory}>
                           <Route path='/' component={Main}>
                             <IndexRoute component={BookPage}/>
                         <Route path='/about' component={BookForm}/>
                           </Route>
                         </Router>
                         </Provider>,document.getElementById('app'));
//store.subscribe(()=>{console.log(store.getState())})

store.dispatch({type:"post",payload:{
  _id:3,title:"haha",price:15.5
}});
//store.dispatch({type:"delete",payload:1})
//store.dispatch({type:"delete",payload:1})
//store.dispatch({type:"add"});
//store.dispatch({type:"add"});