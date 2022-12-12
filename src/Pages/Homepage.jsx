import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, Image, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import About from "./About";
import Calender from "./Calender";
import Contacts from "./Contact";
import Project from "./Project";
import Skills from "./Skillls";
import {  AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { useContext } from "react";
import {ThemeContext} from "../ThemeContext/ThemeContextProvider";



//#1D2143 important color


function Homepage(){
    const {darkTheme, setdarkTheme}= useContext(ThemeContext);
    const { toggleColorMode, colorMode } = useColorMode();
    setdarkTheme(colorMode);
    return <Box bg="#131937" position="relative">
        <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="sm"
                position="fixed"
                bottom={4}
                left={4}
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun/> : <FaMoon/>}
        />
        <Box id="Home" w="100.1156%" ml="-1.069px" pt={["100px", "50px", "50px"]} color="#e1cefd" bg={darkTheme==="dark"? "#13022C" : "#13022C"}>
                <Box h="574px" w="85%" color={darkTheme==="dark"? "#d3cedb" : "#13022C"} m="auto" display={["inline", "inline", "flex"]} alignItems="center" justifyContent="space-around">
                    <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
                        <Box textAlign="left" pl={["20px", "60px", "20px"]}>
                            <Text fontWeight="500" color="white" fontFamily="sans-serif" display="flex" alignItems="center" fontSize={["2xl", "3xl", "4xl"]}>Hi <Image boxSize={["30px", "40px", "50px"]}  src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif" alt="img" /></Text>
                            <Text fontFamily="inherit" color="white" fontWeight={600} fontSize={["5xl", "6xl", "7xl"]}>Rahul Das</Text>
                            <Box fontFamily="sans-serif" color="white" fontSize={["2xl", "3xl", "4xl"]}>
                                <Typewriter
                                    options={{
                                        strings: [
                                        "I'm a Full Stack Web Developer.",
                                        "I'm a Problem Solver.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 115,
                                    }}
                                />
                            </Box>
                            <Button _hover={{transform:"scale(1.1)", bg:"#92bcb5", color:darkTheme==="dark"? "black" : "black"}} mt="10px" p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg={darkTheme==="dark"? "#48B3E9 " :"#48B3E9 "} color={darkTheme==="dark"? "white" : "white"}  variant='solid' leftIcon={<DownloadIcon />}>
                            <a href="https://drive.google.com/uc?export=download&id=1fHs0WXpCaHcAUypp7c8C1qIGgH1xVYuH"  >Resume</a></Button>
                            <Box mt="15px" gap="15px" display="flex" color="#13022c">
                                <a href="https://github.com/Rahulzhp" rel="noreferrer" target="_blank"><Button _hover={{transform:"scale(1.13)",bg:"#92bcb5",color:"black"}} pr="0px"pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg={darkTheme==="dark"? "#48B3E9 " : "#48B3E9 "} color={darkTheme==="dark"? "white" : "white"}  variant='solid' leftIcon={<AiOutlineGithub />}></Button></a>
                                <a href="https://www.linkedin.com/in/rahul-das-787a66246/" rel="noreferrer" target="_blank"><Button _hover={{transform:"scale(1.13)",color:"black", bg:"#92bcb5"}} pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg={darkTheme==="dark"? "#48B3E9 " : "#48B3E9 "} color={darkTheme==="dark"? "white" : "white"}  variant='solid' leftIcon={<AiOutlineLinkedin />}></Button></a>
                            </Box>
                        </Box>
                    {/* <Image position="absolute" top={["-10", "-10", "-20"]} left={["", "", "-8"]} src="https://www.wallpaperuse.com/wallp/56-561836_m.png" alt="img" /> */}
                </Box>
                <Box _hover={{transform:"scale(1.03)", transitionProperty: "transform", transitionDuration: "0.5s"}} bg={darkTheme==="dark"? "#C4A9EC" : "white"} p="3px" w={["42%", "30%", "29%"]} m="20px auto 40px auto" rounded={["50%", "50%", "50%"]}>
                    <Image boxShadow="xl" w="100%" rounded={["50%", "50%", "50%"]} src="https://avatars.githubusercontent.com/u/107567053?v=4" alt="img" />
                </Box>
                {/* <Image w="400px" h="200px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif" alt="img" /> */}
            </Box>
        </Box>
        <About />
        <Skills />
        <Calender />
        <Project />
        <Contacts />
    </Box>
}

export default Homepage;

// {darkTheme==="dark"? "white" : "#13022c"}