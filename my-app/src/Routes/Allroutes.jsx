import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Membership from "./Membership";
import Signin from "./Signin";
import Store from "./Store";
import Workout from "./Workout";
import Login from "./Login";
import Privateroute from "./Privateroutes";
import Checkout from "./Checkout";
import SinglePage from "./Singlepage";

export default function Allroutes()
{
    return (
        <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/signin" element={<Signin></Signin>}></Route>
<Route path="/workout" element={<Workout/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/checkout" element={<Checkout/>}></Route>
<Route path="/store" element={<Privateroute><Store/></Privateroute>}></Route>
<Route path="/workout/:id" element={<SinglePage/>}></Route>
<Route path="/membership" element={<Membership/>}></Route>
        </Routes>
    )
}