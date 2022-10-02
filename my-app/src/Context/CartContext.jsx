import axios from "axios"
import React, { useEffect, useState } from "react"
export const cartcontextji=React.createContext()
export default function CartContext({children})
{
    const [cartdata,setCartdata]=useState([])
    function cartfetchdata()
{
    axios.get("https://mockapitestkiyaji.herokuapp.com/cart")
    .then(res=>setCartdata(res.data)).catch(err=>console.log(err))
}
    useEffect(()=>{
        cartfetchdata()
    },[])

    return (
        <cartcontextji.Provider value={{cartdata,cartfetchdata,setCartdata}}>
{children}
        </cartcontextji.Provider>
    )
}