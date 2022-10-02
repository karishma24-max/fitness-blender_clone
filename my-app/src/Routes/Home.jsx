import { Box, Button, Center, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function Home()
{
    return (
        <>
            <Box bg="#0987A0" h={"680px"}>
<Flex>
<Box w="300px" pt={"200px"} ml="300px">

<Text color="white" fontSize="30px">
Feel Great.
Body and Mind.

</Text>
<Text color="white" mt="10px">
Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.
</Text>
<Button bg="black" color="white" mt="20px">Join Now</Button>

</Box>
<Spacer/>
<Box><Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" borderRadius="50%">

</Image>
</Box>
</Flex>
            </Box>
{/* <----second box-------> */}

<Box bg="#FED7E2" height="600px" mt="20px">
<Center>
<Box width="400px" mt="50px" >

<Text fontSize="40px" color="black" textAlign={"center"} mt="20px">
Introducing</Text> <Flex><Text fontSize="40px" ml="80px">
FB Plus Passes
</Text></Flex>
<Text textAlign={"center"}  mt="20px">Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule.</Text>
<Button ml="150px" mt="30px" bg="black" color="white">BUY A PASS</Button>

</Box>


</Center>
<Center>
<Flex><Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"></Image></Flex>
</Center>

</Box>

{/* <--------------------------third box---------------------------------> */}
<Flex>
<Box w="50%" h="600px" bg="RGBA(0, 0, 0, 0.16)" mt="20px">

<Center>
<Box width="400px" mt="50px">
<Text fontSize="40px" ml="60px"> Workout Videos</Text>
<Text textAlign={"center"}>Exercise with certified personal trainers whether you’re at home or on the road.

</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"></Image>
</Box>
<Box w="50%" h="600px" mt="20px">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="90px"> Programs</Text>
<Text  textAlign={"center"}>Professionally designed programs take the guesswork out of exercising.

</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"></Image>
</Box>
</Flex>

<Flex>

<Box w="50%" h="540px" mt="20px" bg="black">

<Center>
<Box width="400px" mt="30px" >
<Text fontSize="40px" ml="60px" color="white"> Wellness Articles
</Text>
<Text  textAlign={"center"} color="white">Research-backed articles to help you care for your body and mind.
</Text>
<Text color="#2C5282" ml="140px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"></Image>
</Box>



<Box w="50%" h="540px" mt="20px" bg="RGBA(0, 0, 0, 0.16)" ml="20px">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="70px"> Healthy Recipies</Text>
<Text  textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and professional chefs.



</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"></Image>
</Box>


</Flex>


<Box   mt="20px" ml="20px" bg="#EDFDFD">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="70px"> Healthy Recipies</Text>
<Text  textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and professional chefs.



</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"></Image>
</Box>

<Header/>

</>


        
    )
}