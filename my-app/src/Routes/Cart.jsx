import { Box, Button, Flex, Image, Spacer, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { cartcontextji } from "../Context/CartContext";

export default function Cart(props)
{
    const {imageji,price,time,id}=props
   const {cartdata,cartfetchdata}=useContext(cartcontextji)
   const toast = useToast()
    function addtocart(id)
    {
        var flag =false
        console.log(cartdata.length)
       if(cartdata.length===0) 
       {
        
        axios.post("https://mockapitestkiyaji.herokuapp.com/cart",{...props})
        toast({
            title: 'Product added.',
            description: "Product added in the cart",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: "top",
        })
        cartfetchdata()
       }
        else {
         
 cartdata.map((ele)=>{
       if(ele.id===id){
        toast({
            title: 'No need to Add',
            description:"Already ! You have this plan",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: "top",
        })
        flag=true
       }
       
    })
    


   if(flag===false)
   {
    axios.post("https://mockapitestkiyaji.herokuapp.com/cart",{...props})
    cartfetchdata()
   toast({
    title: 'Product added.',
    description: "Product added in the cart",
    status: 'success',
    duration: 9000,
    isClosable: true,
    position: "top",
})
      } 
    
    }
}
    
    return (
       <>
        <Box w="300px" h="300px" mt="20px" >
    <Box h="50%" ><Image src={imageji} alt=""></Image></Box>
    <Box bg="white">
    
        <Text mt="20px" ml="10px" color="grey">FB PLUS PASS</Text>
        <Text mt="20px" ml="10px" fontWeight={"bold"}>{time}</Text>
        <Flex mt="20px" ml="10px" fontWeight={"bold"} ><Text>${price}</Text><Spacer/><Button bg="#4299E1" mb="5px" mr="5px" onClick={()=>addtocart(id)}>ADD TO BAG</Button></Flex>
    </Box>

</Box>

       </> 
    )
}