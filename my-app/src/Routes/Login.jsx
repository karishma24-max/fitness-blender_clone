import {  Box, Button, Center, Checkbox, Divider, Flex, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { Alert, AlertIcon} from "@chakra-ui/alert"
import { useContext, useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { Login_request, Login_success } from "../Context/Actioncreater";
import { Authcontext } from "../Context/Authcontextprovider";

export default function Login()
{
    const {dispatch,name}=useContext(Authcontext)
const navigate=useNavigate()

   const [validdata,setValiddata]=useState({
    username:"",
    password:""
})
function handlecheck(e)
{
    
const {name,value}=e.target
setValiddata({...validdata,[name]:value})
}
    const [formdata,setFormdata]=useState([])
useEffect(()=>{
    dispatch(Login_request)
axios.get("https://mockapitestkiyaji.herokuapp.com/signin")
.then(res=>setFormdata(res.data))
},[])
console.log(formdata)
function checkdetail(e)
{
    console.log(9)
    e.preventDefault()
    let flag = false
formdata.map((ele)=>{
  
    if(ele.firstname===validdata.username&&ele.password===validdata.password)
{
    flag=true
alert ("login succesfull")
dispatch({...Login_success,payload:validdata.username})
return



}
})
if(flag===true)
{
    navigate("/store")
}
else{

  alert("Invalid credentials")  
}
}



    return (
<>
<Center>
    <Box w="400px">
    
<Text fontweight="bold" fontSize="30px" textAlign={"center"}>Sign In</Text>
<Flex>
<Button w="50%" mr="10px" bg="#4299E1">FACEBOOK</Button>
<Button w="50%" ml="10px" bg="#E53E3E">GOOGLE</Button>
</Flex>
<Divider mt="10px" direction ="Horizontal"></Divider> 
<Stack>
<Input placeholder="Username" value={validdata.username} name="username" onChange={handlecheck}></Input>
<Input placeholder="Password" value={validdata.password} name="password" onChange={handlecheck}></Input>
<Checkbox>Remember me</Checkbox> <Text></Text>
<Button bg="#4299E1" onClick={checkdetail}>Sign in</Button>
<Text textAlign={"center"}color="blue.300">FORGET PASSWORD</Text>
</Stack>
    
    <Flex mt="50px" ml="20px"><Text>Not a member yet? </Text><Link to="/signin"><Text color="blue.400" ml="20px">Join now -- it’s free!</Text></Link>
    </Flex>
    </Box>
    </Center>
</>
    )
}
