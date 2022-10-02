import { Box, Button, Flex, Heading, Image, Spacer, Table, Text, Thead } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { cartcontextji } from "../Context/CartContext";

export default function Checkout()
{
    const {cartdata,cartfetchdata,setCartdata}=useContext(cartcontextji)
    function handledelete(id)
    {
        axios.delete(`https://mockapitestkiyaji.herokuapp.com/cart/${id}`)
        cartfetchdata()
    }
    let sum=cartdata.reduce((a,b)=>{
return a+(+[b.price])
    },0)
    
    console.log(sum)
   return (
    <>
       <Box h="100px"><Heading ml="80px">Shopping Bag</Heading></Box> 
       <Box border="1px" color="grey" mt="30px" mb="30px" ml="80px" mr="80px" w="80%" pl="20px" pr="20px"  >
       <Flex><Text>Item</Text><Spacer></Spacer><Text>Remove</Text><Spacer></Spacer><Text>Price</Text></Flex>
       </Box>
       {
        cartdata.map((ele)=>
           <Box mt="30px" mb="30px" ml="80px" mr="80px" w="80%" bg="grey.300"><Flex><Image src={ele.imageji} w="150px" h="10%"/><Spacer></Spacer><Button bg="red" onClick={()=>handledelete(ele.id)}>Delete</Button><Spacer></Spacer><Text fontWeight={"bold"}>${ele.price}</Text></Flex> 
           </Box>  )
       }
       <Flex><Heading ml="150px" color="black">Total Price :- </Heading><Heading  color="red">${sum}</Heading><Spacer/><Button w="300px" bg="orangered" mr="250px" onClick={()=>alert("Thanks for Shopping")}>Proceed to checkout</Button> </Flex>
    </>
   ) 
}