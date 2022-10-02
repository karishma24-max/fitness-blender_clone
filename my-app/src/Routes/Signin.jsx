import { Box, Button, Center, Checkbox, Flex, Input, Spacer, Stack, Text } from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signin()
{
    const init={
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    }
    const [data,setData]=useState(init)
    function handlechange(e)
    {
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    function Adddata(data)
    {
        console.log(data)
        axios.post("https://mockapitestkiyaji.herokuapp.com/signin",data)
    }
    //console.log(data)
    return (
        <>
        <Center>
        <Box w="610px">
            <Text fontSize="30px" fontWeight="bold" textAlign={"center"}>Join</Text>
            <Flex>
<Button w="50%" mr="10px" bg="#4299E1">FACEBOOK</Button>
<Button w="50%" ml="10px" bg="#E53E3E">GOOGLE</Button>
</Flex>
<Flex mt="20px">
<Stack w="80%">
<Input placeholder="First Name"  name="firstname" value={data.firstname} onChange={handlechange}></Input>
<Input placeholder="Last Name"  name="lastname" value={data.lastname} onChange={handlechange}></Input>
<Input placeholder="Email Address" type="email" name="email" value={data.email} onChange={handlechange}></Input>
<Input placeholder="Password"  type="password" name="password" value={data.password} onChange={handlechange}></Input>
<Input placeholder="Confirm Password" type="password" name="confirmpassword" value={data.confirmpassword}  onChange={handlechange}></Input>
</Stack>
<Spacer/>
<Stack ml="40px" border="1px" pl="15px" pt="15px" color="grey">
    Key Benefits:
    <Checkbox color='#4299E1' defaultChecked >
    Customizable fitness calendar
  </Checkbox>
  <Checkbox color='#4299E1' defaultChecked >
  Daily progress tracking
  </Checkbox>
  <Checkbox color='#4299E1' defaultChecked >
  Favorite workout videos

  </Checkbox>
  <Checkbox color='#4299E1' defaultChecked >
  Helpful health, nutrition and fitness information
  </Checkbox>
  <Checkbox color='#4299E1' defaultChecked >
  and much, much more…
  </Checkbox>
</Stack>
</Flex>
<Checkbox mt="50px" ml="50px">I agree to the Fitness Blender terms of service and privacy policy</Checkbox>
<Link to="/login"><Button bg="#4299E1" mt="100px" ml="-300px" w="200px" onClick={()=>Adddata(data)}>JOIN</Button></Link>
        </Box>
        
</Center>
        </>
    )
}