import { Box, Button, Center, Flex, Grid, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Cart from "./Cart";

export default function Store()
{
    const [store,setstoredata]=useState([])
    useEffect(()=>{
axios.get("https://mockapitestkiyaji.herokuapp.com/pass")
.then(res=>setstoredata(res.data))
    },[])
//const [item,setItem]=useState()
    // function addtocart(id)
    // {
    //     axios.get(`https://mockapitestkiyaji.herokuapp.com/pass/${id}`)
    //     .then(res=>setItem(res.data))
    //     adddetail(item)
       
    // }
// function adddetail(item)
// {

//     axios.post("https://mockapitestkiyaji.herokuapp.com/cart",{...item})
// }
return ( <> 
<Box>
 <Box pl="30px" pr="30px">

<Box ml="30px" mt="30px">
<Heading>FB Plus Passes</Heading>
    <Text>
    Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule, and extend your access with another pass at any time. Multiple passes can be purchased at once for longer access.
Note: Passes cannot be used at the same time as a monthly or yearly FB Plus subscription.
    </Text>
    
</Box>
<Box h="700px" bg="#EDF2F7" ml="30px" mt="30px">
<SimpleGrid columns={[2, null, 4]} spacing='40px'>
{store.map((ele)=><Cart  key={ele.id} imageji={ele.image} price={ele.price} id={ele.id} time={ele.time}/> )}
</SimpleGrid>
</Box>

<Box h="600px">
<Box ml="150px" mr="150px" mt="100px">
<Flex>
<Image h="40%" w="40%" src="https://cloudfront.fitnessblender.com/assets/img/workout-complete/shirts-20200224.jpg"></Image>

<Box>
   <Heading ml="20px">Fitness Blender Gear</Heading> 
    <Text fontSize="25px" ml="20px" mt="5px"> NOVEMBER 2020 UPDATE</Text>
<Text ml="20px" mt="30px" lineHeight={"35px"} color="#718096">
New Fitness Blender gear and clothing are still in the works, but as you might suspect, COVID significantly impacted our original plans. Unfortunately, we still don't have a solid timeline we can share, but we'll keep you up-to-date as the situation changes.

We intend to re-launch starting with casual clothing, following up with gear and other apparel if all goes well. If you've already filled out the gear survey, thank you! If not, it only takes about two minutes and will let us know what is most important to you.
</Text>
<Text ml="20px" mt="30px" lineHeight={"35px"}  color="#718096">
We intend to re-launch starting with casual clothing, following up with gear and other apparel if all goes well. If you've already filled out the gear survey, thank you! If not, it only takes about two minutes and will let us know what is most important to you.
</Text>
</Box>
</Flex>
</Box>
<Box h="250px" bg="#EBF8FF" mt="30px">
<Center>
<Box w="600px"  color="black">
<Heading mt="30px" textAlign={"center"}>Other Shopping Options</Heading>
<Text mt="30px" fontSize="20px" textAlign={"center"}>Explore Workout Programs, Meal Plans, and FB Plus memberships.</Text>
<Flex mt="30px"><Button ml="40px" w="180px" bg="#4299E1">PROGRAMS</Button><Button ml="20px" w="180px" bg="#4299E1">MEAL PLANS</Button><Button  w="180px" ml="20px" bg="#4299E1"> FB PLUS</Button></Flex>
</Box>
</Center>
</Box>
</Box>

    </Box>
</Box>
<Box mt="150px">
<Header/>
</Box>

</>
)
}