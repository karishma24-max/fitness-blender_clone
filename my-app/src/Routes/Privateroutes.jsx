import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";

export default function Privateroute({children})
{
    const {isAuth}=useContext(Authcontext)
    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }
    return children
}