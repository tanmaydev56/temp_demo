import { Box, Card, Flex,Text} from "@chakra-ui/react"

import {motion} from 'framer-motion'

import { Tilt } from "react-tilt"

const Categories = () => {
  return (


    <Flex 
   
    gap="150px"
    flexDirection="column"

    >
        <Text p="50px" fontSize="50px">Categories</Text>
        
        
       
        <Flex  justifyContent="space-around"
           flexDirection={{
            base: "column",
            md: "row",
            lg: "row",
            xl: "row",


        }}
        gap={{
            base: "150px",
            md: "250px",
            lg: "250px",
            xl: "250px",

        }}
        p={{
            base: "80px",
            md: "80px",
            lg: "80px",
            xl: "80px",
        }}>
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >

            <Tilt>
                <Card bg="white" h="230px" w="230px"  shadow="xl">
          
      
             
       

            <Card bg="white" h="230px" w="230px" 
            top="-20px"
            shadow="xl"
            >
               
                <Card bg="white" h="230px" w="230px" 
            top="-20px" shadow="xl" >
               <Card  bg="black" h="230px" w="230px" 
            top="-20px" shadow="xl">
             <img src="" alt="" />
             </Card>
             </Card>

             </Card>

             

             </Card>
             </Tilt>
             </motion.div>

           
            
             <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >

            <Tilt>
        <Card bg="white" h="230px" w="230px"> 
        <Card bg="white" h="230px" w="230px" 
            top="-20px"
            shadow="xl"
            >
                <Card bg="white" h="230px" w="230px"  
            top="-20px" shadow="xl" >
                <Card bg="black" h="230px" w="230px"   
            top="-20px" shadow="xl" >
            <img src="" alt="" />
             </Card>
             </Card>
             </Card>
        </Card>
        </Tilt>
        </motion.div>

 <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >

            <Tilt>
        <Card bg="white" h="230px" w="230px">   <Card bg="white" h="230px" w="230px"  
            top="-20px"
            shadow="xl"
            >
                <Card bg="white" h="230px" w="230px"   
            top="-20px" shadow="xl" >
                <Card bg="black" h="230px" w="230px"   
            top="-20px" shadow="xl" >

            <img src="" alt="" />
             </Card>
             </Card>
             </Card>
             </Card>
             
        </Tilt>
        </motion.div>
        
        </Flex>
        </Flex>


      
    



  )
}

export default Categories
//  _hover={{top: "-10px",transition:"all 0.5s ease-in-out"}}
// _active={{top: "0px",transition:"all 0.5s ease-in-out"}}
