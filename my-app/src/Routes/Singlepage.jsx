import { AspectRatio, Box, Center } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SinglePage()
{
    const [singleji,setSingleji]=useState([])
    const params= useParams()
    useEffect(()=>{
axios.get(`https://mockapitestkiyaji.herokuapp.com/videos/${params.id}`)
.then(res=>setSingleji(res.data))
    },[])
    return (
        <>
        <Center>
<Box w="100%" h="500px">

<AspectRatio maxW='560px' ratio={1} ml="450px">
  <iframe
    title='naruto'
    src={singleji.url}
    allowFullScreen
  />

</AspectRatio>
</Box>
</Center>
        </>
    )
}