import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Image,
    Flex,
    AspectRatio,
    Heading,
    Divider,
    Link as ChakraLink
  } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
  
function LessonCard(props) {
  // show detail or not
  const [handle, setHandle] = useState(false)
  useEffect(()=>{console.log(props.image)},[])
  // color mode
  const img_bg = useColorModeValue('white', 'gray.800')
  const detailColor = useColorModeValue("gray.400", "gray.500")
  const text_bg = useColorModeValue('gray.50', 'gray.900')

    return (
      <>
      {handle || 
      <Center py={6}>
          <Box  
            maxW={'330px'}
            w={'full'}
            bg={img_bg}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            >         
            <Box 
              w={"full"}
              h={"18vw"}
              bgImage={props.image.img_abstract}
              
              roundedTop={"md"} 
              bgPosition={"center"} 
              bgSize={"cover"} 
              position={"relative"}
            >
              <Center>
                <Heading
                  fontSize={"3xl"} 
                  position={"absolute"}
                  top={"50%"}
                  transform={"translate(0,-50%)"}
                  color={"whiteAlpha.800"}
                  >
                    {props.name}
                </Heading>
              </Center> 
            </Box>
            <Box bg={text_bg} px={6} py={10}>
              <List spacing={3}>
                {props.content?.map((list, index) => 
                  <ListItem key={index}>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {list}
                  </ListItem>
                )}
                {/* {props.content} */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>
    
              <Button
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
                onClick={()=>{setHandle(true)}}>
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>}

        {/* show card detail */}
        {
          handle &&
          <Stack spacing={10}>
            {/* Card's name and image */}
            <Image src={props.image} fit={"cover"} rounded={"md"}/>
            <Box>
              <Heading fontSize={"5xl"}>{props.name}</Heading>
              <Text mt={5} textAlign={"justify"} color={detailColor}>{props.detail}</Text>
            </Box>
            <Divider />

            {/* project name and detail */}
            <Flex flexWrap={"wrap"}>
              <Stack spacing={5}>
                <Heading fontSize={"4xl"}>{props.projectName}</Heading>
                <Text textAlign={"justify"} color={detailColor}>{props.projectDetail}</Text>
                <Text textAlign={"justify"}>
                  <Text as={"span"} fontWeight={"bold"}>資料來源：</Text>
                  <ChakraLink href='https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset'>
                  Kaggle Heart Disease Dataset
                  </ChakraLink>
                </Text>
                <Text textAlign={"justify"}>
                  <Text as={"span"} fontWeight={"bold"}>研究成員：</Text>
                  <br/>
                  潘玠佑(我)：組長，教學組員三種演算法與分派工作。並負責資料預處理、關聯規則的報告與簡報白板。
                  <br/>
                  黃晰婕：負責資料預處理、分群法的報告與簡報白板。
                  <br/>
                  黃晟旺：負責分類法的報告與簡報白板。
                  <br/>
                  王安琪：負責製作與美化簡報，以及主持演講。
                </Text>
              </Stack>
              <Image src={props.projectImage} fit={"cover"}/>
            </Flex>
            <Divider />

            {/* project report */}
            <Center>
              <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={16 / 9}>
                <iframe
                  title={`${props.projectName} pdf`}
                  src={props.projectReport}
                  position="absolute"
                  width={"100%"}
                  height={"100%"}
                  allow="autoplay"
                />
              </AspectRatio>
            </Center>

            {/* back button */}
            <Button color={props.color} onClick={()=>{setHandle(false)}}>Back</Button>          
          </Stack>
        }
      </>
    );
  }

export default LessonCard;
