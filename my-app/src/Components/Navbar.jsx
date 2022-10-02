import { Box, Button, Center, Flex,  Icon,  Image,  Spacer, Stack, Text } from '@chakra-ui/react'
import { AiFillCaretDown, AiOutlineMonitor, AiTwotoneUsb } from "react-icons/ai"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Authcontext } from '../Context/Authcontextprovider'
import CartContext, { cartcontextji } from '../Context/CartContext'
export default function Navbar()
{
    const {name}=useContext(Authcontext)
    const {cartdata}=useContext(cartcontextji)
    console.log(cartdata.length)
    console.log(name)
    return (
        <>
            <Flex ml="50px" mr="50px">
            <Box  width={"150px"}
            >
               <Link to="/"><Image width={"70%"}  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxMVFRUVGCEaFxcYGRgZGRcaHhYZHSAeIR0YIyggGx4mHxohIjEhJSkrLjowIyAzOD8sOCgtLy0BCgoKDg0OGxAQGy4iHyYwLzcrLSstLSs1Ky0tLi0tLS0tLS0rLS0tLSstLS0tLy4tLS8tLS0tLS8rLi0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAgDAv/EAEoQAAEDAwIDBAYFBBAHAQAAAAEAAgMEBREGEgchMRNBUWEiQnGBkaEUMnKxshUjUsEWJCUzNjdDU2JzdIKSorPRFzQ1VGODwgj/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAmEQEAAgEFAAEDBQEAAAAAAAAAAQIRAwQSITFREyJBQnGRobEF/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERfGqdM2L9rgFx5DPIDzPfj2IPhc7rR2uHdWvAz0HVzvYOpVPr9eTudi3xBo8X5J+AwB8Sp5mlqSacyXZzp5D1LiWtHkGt6DyJK7hYbQG4FPF/gatFLaNfYzLLeuvfyYrH9s/fq69udkSAeQa3HzC66TXNyid+2WskHvafiMj5KzV2j7PVN/NsMZ8WEj5HI+SpV+03WWY7nenH+mO77Q7vuWultvqdYwx6ldzpfdnK92XU1vux2sOx/wCg7kT7D0d96mliLXOY4FnIjmD4FbNb6j6XQRyD12B3xAKzbnQjTmJr5LVtNxOrmLew6ERFlbBVXVPEHT+majs617ny98cY3ObyyN3MNb7Ccqx18/0WhkeOexjnfBpP6l5x4d2Fut9VuF4e4jY6aUg4dId7RjPdkvzkdwwMK9axPcqzLXdOcUrBfrkyCJs8ckhwwPYCHHBPWMuxyB5nAV4VNptE6f0p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" alt=""/>
               </Link>  </Box>
            <Spacer></Spacer>
            
            <Flex mt="20px" ml="-50px"><Link to="/workout"><Text>WORKOUT</Text></Link><Box mt={"5px"} ml={'5px'}><AiFillCaretDown /></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text>PROGRAMS</Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text>HEALTHY LIVING</Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text>COMMUNITY</Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text>ABOUT</Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text><Link to="/store">STORE</Link></Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px"><Text>MEMBERSHIPS</Text><Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer></Spacer>
            <Flex mt="20px">
            
            
            
            <Popover>
  <PopoverTrigger>
    <Box
      tabIndex='0'
    
      role='button'
      aria-label='Some box'
      children="Hi! Signin"
    />
  </PopoverTrigger>
  <Center>
  <PopoverContent bg='black' color='white' textalign="center" height="300px">
  
    <PopoverHeader fontWeight='semibold' textAlign={"center"}><Link to="/membership">JOIN FOR FREE!</Link></PopoverHeader>
    
    
    <PopoverBody color="white" textAlign={"center"}>
    
    Join for free and start building and tracking your workouts, get support from other Fitness Blender members and more!

<Stack>
<Link to="/membership"><Button bg="blue" mt="10px" width="130px">Join</Button ></Link>
<Link to="/login"><Button bg="black" color="white" width="130px" border="1px" >Sign in</Button></Link>
</Stack>

    </PopoverBody>
   
  </PopoverContent>
  </Center>
</Popover>
            
            
            
            
            
            <Text fontWeight={"bold"} ml="10px">{name} </Text>
            
            
            
            
            
            
            
            
            <Box mt={"5px"} ml={'5px'}><AiFillCaretDown className="iconstyle"/></Box></Flex>
            <Spacer/>
            <Flex mt="20px"><Box mr="30px" width={"20px"}><Icon as={AiOutlineMonitor} boxSize="30px"/></Box> <Link to="/checkout"><Icon as={AiTwotoneUsb} boxSize="30px"></Icon></Link>{cartdata.length}</Flex>
            
            </Flex>
        </>
    )
}