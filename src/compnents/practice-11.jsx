import { useReducer } from "react";


const initialState={
  showText : false,
  changeStyle: false
}
const HIDE='HIDE';
const SHOW='SHOW';
const CHANGE_STYLE='CHANGE_STYLE';
function reducer(state,action){
  switch(action.type){
    case HIDE:
      return{
        ...state,
        showText: false
      };   
    case SHOW:
      return{
        ...state,
        showText:true
      };
    case CHANGE_STYLE:
      return{
        ...state,
        changeStyle:!state.changeStyle
      }
    default:
      return state;
  }
}
export function Practice11(){
  const [state,dispach] = useReducer(reducer,initialState);

  return(
    <div>
      {
        state.showText ? <p style={{backgroundColor: state.changeStyle?"red":"white"}}>Akash Chowdhury</p> : ''
      }
      <button onClick={()=>{
        dispach({type:HIDE})
      }}>Hide text</button>

      <button onClick={()=>{
        dispach({type:SHOW})
      }}>Show text</button>

      <button onClick={()=>{
        dispach({type:CHANGE_STYLE})
      }}>change text style</button>
    </div>
  )

}