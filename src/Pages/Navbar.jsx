import { Box, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IconName, GiHamburgerMenu } from "react-icons/gi";
import { CiTextAlignJustify } from "react-icons/ci";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import "./Res.css"


function Navbar() {

    const [isscroll, setisscroll] = useState(false);
    const [ham, setHam] = useState(false)

    const { darkTheme, setdarkTheme } = useContext(ThemeContext);

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
    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1fHs0WXpCaHcAUypp7c8C1qIGgH1xVYuH/view?usp=sharing",
            "_blank",
            "noopener,noreferrer"
        )
    }
    return <Box id="nav-menu" zIndex={1} color={isscroll ? darkTheme === "dark" ? "white" : "white" : darkTheme === "dark" ? "white" : "white"} bg={isscroll ? darkTheme === "dark" ? "#48B3E9 " : "#48B3E9 " : darkTheme === "dark" ? "#1D2143" : "#1D2143"} w="100%" p="11px 9px" boxShadow="md" position="fixed">
        <Box w="91%" m="auto" display={["flex", "flex", "flex"]} justifyContent="space-between" textAlign={["center", "", ""]}>
            <Box id="user-detail-name">
                <Text fontFamily="inherit" fontWeight="500" paddingLeft={["8px", "13px", "25px"]} fontSize={['lg', 'sm', '3xl']}>Rahul Das</Text>
            </Box>
            <Box onClick={() => setHam(!ham)} className="res">
                <CiTextAlignJustify size="23px" />

            </Box >
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box id="rt" gap={["auto", "13px", "23px"]} color={isscroll ? darkTheme === "dark" ? "white" : "black" : darkTheme === "dark" ? "white" : "white"} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link className="nav-link home" display="flex" to="/">
                    <AnchorLink href='#Home'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link className="nav-link about" display="flex" to="/about">
                    <AnchorLink href='#About'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link className="nav-link skills" display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link className="nav-link projects" display="flex">
                    <AnchorLink href='#Project'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" _active={{ textDecoration: "underlined" }} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link className="nav-link contact" display="flex">
                    <AnchorLink href='#Contact'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text className="nav-link resume" onClick={handleClick} color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/uc?export=download&id=1fHs0WXpCaHcAUypp7c8C1qIGgH1xVYuH">Resume</a></Text>
            </Box>


        </Box>
        {
            ham ? <Box className="nt" gap={["auto", "13px", "23px"]} color={isscroll ? darkTheme === "dark" ? "white" : "black" : darkTheme === "dark" ? "white" : "white"} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link className="nav-link home" display="flex" to="/">
                    <AnchorLink href='#Home'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link className="nav-link about" display="flex" to="/about">
                    <AnchorLink href='#About'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link className="nav-link skills" display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link className="nav-link projects" display="flex">
                    <AnchorLink href='#Project'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" _active={{ textDecoration: "underlined" }} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link className="nav-link contact" display="flex">
                    <AnchorLink href='#Contact'><Text color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text className="nav-link resume" color={darkTheme === "dark" ? "gray" : "white"} fontFamily="inherit" fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/uc?export=download&id=1fHs0WXpCaHcAUypp7c8C1qIGgH1xVYuH">Resume</a></Text>
            </Box> : ""
        }

    </Box>
}

export default Navbar;