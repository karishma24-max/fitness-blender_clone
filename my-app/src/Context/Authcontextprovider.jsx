import   React, { useReducer }  from "react"
import Reducer from "./Reducer"
export const Authcontext=  React.createContext()
export default function Authcontextprovider({children})
{
    const initial={
        isAuth:false,
        isLoading:false,
        name:null,
        iserror:false
    }
    
    const [state,dispatch]=useReducer(Reducer,initial)
return (
    <Authcontext.Provider value={{...state,dispatch}}>
{children}
    </Authcontext.Provider>
)
}