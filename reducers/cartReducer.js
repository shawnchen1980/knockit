"use strict"
const reducer=(state={cart:[]},action)=>{
  switch(action.type){
    // case "get":
    //   return {...state};
    case "Add_To_Cart":
      let bookIndexToAdd=state.cart.findIndex((item)=>(item._id===action.payload._id));
      if(bookIndexToAdd>=0){
        return {cart:[...state.cart.slice(0,bookIndexToAdd),{...state.cart[bookIndexToAdd],qty:state.cart[bookIndexToAdd].qty+1},...state.cart.slice(bookIndexToAdd+1)]};
      }
      return {cart:[...state.cart,{...action.payload,qty:1}]}
      break;
    // case "delete":
    //   const index=state.books.findIndex((item)=>(item._id==action.payload));
    //   console.log(index);
    //   if(index>=0){
    //   state={ books:[...state.books.slice(0,index),...state.books.slice(index+1)]};
    //                 }
    //   //tate=action.payload;
    //   break;
    default:
      break;
                    }
  return state;
};
export default reducer;