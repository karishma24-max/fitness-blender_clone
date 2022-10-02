import { AspectRatio, Box, Center, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function Workout()
{
    const [item,setItem]=useState([])
    useEffect(()=>{
axios.get("https://mockapitestkiyaji.herokuapp.com/videos").then(res=>setItem(res.data))
    },[])
  return (
    <>
        <Box >
         <Flex bg="#EDFDFD" h="500px" ml="30px" mr="30px"><Center> <Box w='450px' ml="150px">  <Text fontWeight="bold" color="#00B5D8" >ONLINE WORKOUT VIDEOS</Text>
        <Heading color="#0987A0" mt="30px">Find Your Fitness.
Something for Everyone.</Heading>
<Text mt="30px" color="#00B5D8">A huge selection of workout videos and programs to help you look and feel your best.</Text></Box>
<Image ml="200px" w="100%" borderRadius="10%" src="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts-xs.jpg"></Image>  
</Center> 
         </Flex> </Box>
         <Box h="100px"><Heading ml="100px" mt="50px">Newest Free Workout Videos</Heading></Box>
         
         <Flex h="400px" bg="#EDFDFD" mt="20px">
         {
            item.map((ele)=><>
              <Link to={`/workout/${ele.id}`}>  <Box ml="20px" mt="50px"  boxShadow='2xl'>
                    <Image src={ele.img}></Image>
                    <Text fontSize="20px" textAlign={"center"} mt="20px" fontWeight="bold">{ele.title}</Text>
                    <Flex><Text ml="20px" color="#0987A0" fontWeight={"bold"}>{ele.time}</Text><Spacer/><Text color="#0987A0"  mr="20px" fontWeight={"bold"}>{ele.title2}</Text></Flex>
                </Box>
                </Link>
            </>)
         }

         </Flex>
         <Box h="100px"><Heading ml="100px" mt="50px">Newest Plus Workout Videos</Heading></Box>

         <Flex>
         <Link to={`/store`}>  <Box ml="20px" mt="50px" w="325px"  boxShadow='2xl' h="350px">
                    <Image src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1121-low-back-saver-aa9a.jpg"></Image>
                    <Text fontSize="20px" textAlign={"center"} mt="20px" fontWeight="bold">Low Back Saver
Exercises to Prevent and Relieve Back Pain</Text>
                    <Flex><Text ml="20px" color="#0987A0" fontWeight={"bold"}>29 min</Text><Spacer/><Text color="#0987A0"  mr="20px" fontWeight={"bold"}>Lower Body</Text></Flex>
                </Box>
                </Link>
                <Spacer></Spacer>
                <Link to="/store">  <Box ml="20px" mt="50px"  boxShadow='2xl' w="325px" h="350px">
                    <Image src="https://d18zdz9g6n5za7.cloudfront.net/video/1119-kettlebell-cardio-and-strength-b325.jpg"></Image>
                    <Text fontSize="20px" textAlign={"center"} mt="20px" fontWeight="bold">Kettlebell Cardio and Strength
Fast-Paced Circuits With Compound Moves</Text>
                    <Flex><Text ml="20px" color="#0987A0" fontWeight={"bold"}>30 min</Text><Spacer/><Text color="#0987A0"  mr="20px" fontWeight={"bold"}>Total Body</Text></Flex>
                </Box>
                </Link>
                <Spacer></Spacer>
                <Link to="/store">  <Box ml="20px" mt="50px"  boxShadow='2xl' w="325px" h="350px">
                    <Image src="https://d18zdz9g6n5za7.cloudfront.net/video/1127-pilates-for-the-arms-and-abs-966f.jpg"></Image>
                    <Text fontSize="20px" textAlign={"center"} mt="20px" fontWeight="bold">This fun upper-body and core-focused  your foundational strength and stability!

</Text>
                    <Flex><Text ml="20px" color="#0987A0" fontWeight={"bold"}>40 min</Text><Spacer/><Text color="#0987A0"  mr="20px" fontWeight={"bold"}>Upper body core</Text></Flex>
                </Box>
                </Link>
                <Spacer></Spacer>
                <Link to="/store">  <Box ml="20px" mt="50px"  boxShadow='2xl' w="325px" h="350px">
                    <Image src="https://d18zdz9g6n5za7.cloudfront.net/video/1115-lower-body-power-yoga-flow-a701.jpg"></Image>
                    <Text fontSize="20px" textAlign={"center"} mt="20px" fontWeight="bold">Power Yoga for Hips
Build Strength and Increase Joint Mobility</Text>
                    <Flex><Text ml="20px" color="#0987A0" fontWeight={"bold"}>39 min</Text><Spacer/><Text color="#0987A0"  mr="20px" fontWeight={"bold"}> Lower body</Text></Flex>
                </Box>
                </Link>

         </Flex>
         <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"></Image>
         <Header/>
    </>
  )  
}