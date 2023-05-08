import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import "./Page.css";

function Contacts() {
    return <Box data-testid="contact" id="Contact" bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" color="white" p="60px 0px" pt="75px">
        <Box w={["85%", "85%", "85%"]} m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
            <Box>
                <Box p={["15px", "38px", "15px"]}>
                    <Text fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} textAlign={["center", "left", "left"]}>Contact Me</Text>
                    <Box id="contact-email" display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text fontSize={["sm", "md", "xl"]}>rahulvck95@gmail.com</Text>
                    </Box>
                    <Box id="contact-github" display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineGithub} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://github.com/Rahulzhp" rel="noreferrer" target="_blank">https://github.com/Rahulzhp</a></Text>
                    </Box>
                    <Box id="contact-linkedin" display={["inline", "flex", "flex"]} gap={["", "7px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/rahul-das-787a66246/" rel="noreferrer" target="_blank">Rahuldas_linkedin.com</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLink} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://rahulzhp.github.io/" rel="noreferrer" target="_blank"></a>https://rahulzhp.github.io/</Text>
                    </Box>
                    <Box id="contact-phone" display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={IoIosCall} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}>+91-7003751859</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Contacts;