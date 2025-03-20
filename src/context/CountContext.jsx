import {  createContext, useReducer } from "react";

export const CountContext = createContext({
    count:0,
    dispatch:null
})


const CountContextProvider =({children})=>{
    const reducerFunction=(state,action)=>{
        switch(action.type){
          case 'increment' : 
          return state+action.payload
    
          case 'decrement' :
            return state-action.payload

            case 'reset' :
                return 0
            default:
      return state;
        }
      }
      const [count, dispatch] = useReducer(reducerFunction,0)
    return (
        <CountContext.Provider value={{count,dispatch}}>
            {children}
        </CountContext.Provider>
    )
    
    
}

export default CountContextProvider