export default function Reducer(state,action)
{
switch(action.type)
{
    case "Login_request":
        return {...state,isLoading:true}
        case "Login_success":
            return {...state,name:action.payload,isAuth:true}
            case "Login_fail":
                return {...state,isError:action.payload}
                default:
                    return state
}
}
