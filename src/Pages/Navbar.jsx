import { Box, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";


function Navbar(){

    const [isscroll, setisscroll] = useState(false);

    const {darkTheme, setdarkTheme}= useContext(ThemeContext);

    function isScrolling() {
        if (window.scrollY > 80) {
        setisscroll(true);
        } else {
        setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll");
        }
    }, [])
    return <Box zIndex={1} color={isscroll? darkTheme==="dark"? "white" :"white": darkTheme==="dark"? "white" : "white" } bg={isscroll? darkTheme==="dark"? "#48B3E9 " : "#48B3E9 " : darkTheme==="dark"? "#1D2143" : "#1D2143"} w="100%" p="11px 9px" boxShadow="md"  position="fixed">
        <Box w="91%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between" textAlign={["center", "", ""]}>
            <Box >
                <Text fontFamily="inherit" fontWeight="500" paddingLeft={25} fontSize={['lg', 'sm', '3xl']}>Rahul Das</Text>
            </Box>
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box display="flex" gap={["auto", "13px", "23px"]} color={isscroll? darkTheme==="dark"? "white" :"black": darkTheme==="dark"? "white" : "white" } justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link display="flex" to="/">
                    <AnchorLink href='#Home'><Text color={darkTheme==="dark"? "gray": "white" } fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/about">
                    <AnchorLink href='#About'><Text color={darkTheme==="dark"?  "gray":"white" } fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text color={darkTheme==="dark"?  "gray":"white" } fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Project'><Text color={darkTheme==="dark"?  "gray":"white" } fontFamily="inherit" fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Contact'><Text color={darkTheme==="dark"?  "gray":"white" } fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text color={darkTheme==="dark"?  "gray":"white" } fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/uc?export=download&id=1fHs0WXpCaHcAUypp7c8C1qIGgH1xVYuH">Resume</a></Text>
            </Box>
        </Box>
    </Box>
}

export default Navbar;