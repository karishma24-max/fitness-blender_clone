import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart(props)
{
    const {imageji,price,time,id}=props
    const [cartdata,setCartdata]=useState([])
    useEffect(()=>{
        axios.get("https://mockapitestkiyaji.herokuapp.com/cart")
        .then(res=>setCartdata(res.data)).catch(err=>console.log(err))
    },[])

    function addtocart(id)
    {
        console.log(cartdata)
       if(cartdata.length===0) 
       {
        axios.post("https://mockapitestkiyaji.herokuapp.com/cart",{...props})
       }
         
 cartdata.map((ele)=>{
       if(ele.id===id){
alert("already in card")
          return
       }
       
    })

    axios.post("https://mockapitestkiyaji.herokuapp.com/cart",{...props})
console.log("shalu")
       
    }
    
    return (
       <>
        <Box w="300px" h="300px" mt="20px" >
    <Box h="50%" ><Image src={imageji} alt=""></Image></Box>
    <Box bg="white">
    
        <Text mt="20px" ml="10px" color="grey">FB PLUS PASS</Text>
        <Text mt="20px" ml="10px" fontWeight={"bold"}>{time}</Text>
        <Flex mt="20px" ml="10px" fontWeight={"bold"} ><Text>{price}</Text><Spacer/><Button bg="#4299E1" mb="5px" mr="5px" onClick={()=>addtocart(id)}>ADD TO BAG</Button></Flex>
    </Box>

</Box>
       </> 
    )
}