"use strict"
const reducer=(state={books:[{_id:1,title:"book one",price:10.23},{_id:2,title:"book two",price:13.45}]},action)=>{
  switch(action.type){
    case "get":
      return {...state};
    case "post":
      let books=[...state.books,action.payload];
      state={books};
      break;
    case "delete":
      const index=state.books.findIndex((item)=>(item._id==action.payload));
      console.log(index);
      if(index>=0){
      state={ books:[...state.books.slice(0,index),...state.books.slice(index+1)]};
                    }
      //tate=action.payload;
      break;
    default:
      break;
                    }
  return state;
};
export default reducer;