import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Store from "./Store";
import Workout from "./Workout";

export default function Allroutes()
{
    return (
        <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/signin" element={<Signin></Signin>}></Route>
<Route path="/workout" element={<Workout/>}></Route>
<Route path="/store" element={<Store/>}></Route>
        </Routes>
    )
}