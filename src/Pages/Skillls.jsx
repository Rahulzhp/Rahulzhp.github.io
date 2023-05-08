import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image } from "@chakra-ui/react";
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiRedux, SiTypescript, SiVercel, SiReplit, SiCypress, SiNpm, SiNetlify, SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import "./Page.css";


function Skills() {

    const allskills = [

        {
            text: "JavaScript",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
        },
        {
            text: "React",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
        },
        {
            text: "HTML",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
        },
        {
            text: "CSS",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
        },
        {
            text: "Chakra UI",
            iconas: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
        },
        {
            text: "Redux",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
        },
        {
            text: "TypeScript",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"

        },
        {
            text: "MongoDB",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
        },
        {
            text: "Node JS",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
        },
        {
            text: "Cypress",
            iconas: "https://avatars.githubusercontent.com/u/8908513?s=280&v=4"
        },
        {
            text: "Git",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
        },
        {
            text: "NPM",
            iconas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////LODfJKyrioaHKMC/ZfHvIIiDz2dnek5LJLSzKNTTQSkn24uLIIiHMOTn129vinZ367e3uy8rSVlX99/fdjYzmrq7uxMPQTEvFAADWcXHNQD/GEQ/35+fVbWz77+/bhITUZmXmsLDyHCq4AAAB8UlEQVR4nO3b0VbaQBRAUYNtkEgBFQpUrG3//yO7ipmxNBAvTYrQtffjcBPn+GKWGa6uAAAAAAAAAAAAAAAAAAAAAADgaMvZ9bmbLTsVLsrBuSsXnQpvRsW5G90oVHjuFCpMhdWHgPxTI8NHTh+8vqfC6uFjQN7yl8Dw17TFSeTWh6/vqXBwHZmeVC/T5VNgePqp/uXd/t3WxmW/hbPIdC4cB4aHHQunCmMU7lK4Q+FbFAa1FM7vas95qaUwT8/TSlthGr5ruf7fF96vy63N6w5bCpf19PpzWmkpnNfD5To/Onzb1Ct5IycoTDt8yEtthfX0IFQ4KOob5cJF4+FKYZBChZnCHQq3FAYpVJgp3KFwS2GQQoXZsnx52VD+t4VNChUqDFKosIXCUxc233J3LRy3/Fc/nY8o8xuD5kZ6fstdPK5u/1TnFJP00apIG2sW3k8OXl8cvnWVFlaPRWMjVb+FRdVQND5qKVyWgesDt24uvcuJoZYn7/4pVKhwL4W96li4qF8uh+SIPefa0vNBMTrihiGbbifZn4ZHmE7qij1nE7/nv8/TY24ZETkm2Jf01LbnxGj6ZPDjhPvpX/Hbo8cBr/9ru0gKFZ4/hZdfOHr7m2abyy6MfFtw+N6bBAAAAAAAAAAAAAAAAAAAAACAX34CrC5ayvgCOKgAAAAASUVORK5CYII="
        },
        {
            text: "Netlify",
            iconas: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"
        },
        {
            text: "Vercel",
            iconas: "https://avatars.githubusercontent.com/u/14985020?s=280&v=4"
        },
        {
            text: "Replit",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/768px-Repl.it_logo.svg.png"
        },
        {
            text: "VS Code",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
        }
    ]
    const frontend = [
        {
            text: "JavaScript",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
        },
        {
            text: "React",
            iconas: "	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
        },
        {
            text: "HTML",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
        },
        {
            text: "CSS",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
        },
        {
            text: "Chakra UI",
            iconas: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
        },
        {
            text: "Redux",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
        },
        {
            text: "TypeScript",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"

        },
    ]
    const backend = [
        {
            text: "MongoDB",
            iconas: "	https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
        },
        {
            text: "Node JS",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
        },
        {
            text: "Cypress",
            iconas: "https://avatars.githubusercontent.com/u/8908513?s=280&v=4"
        },

        {
            text: "Express JS",
            iconas: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
        },
    ]
    const tools = [
        {
            text: "Git",
            iconas: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
        },
        {
            text: "NPM",
            iconas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////LODfJKyrioaHKMC/ZfHvIIiDz2dnek5LJLSzKNTTQSkn24uLIIiHMOTn129vinZ367e3uy8rSVlX99/fdjYzmrq7uxMPQTEvFAADWcXHNQD/GEQ/35+fVbWz77+/bhITUZmXmsLDyHCq4AAAB8UlEQVR4nO3b0VbaQBRAUYNtkEgBFQpUrG3//yO7ipmxNBAvTYrQtffjcBPn+GKWGa6uAAAAAAAAAAAAAAAAAAAAAADgaMvZ9bmbLTsVLsrBuSsXnQpvRsW5G90oVHjuFCpMhdWHgPxTI8NHTh+8vqfC6uFjQN7yl8Dw17TFSeTWh6/vqXBwHZmeVC/T5VNgePqp/uXd/t3WxmW/hbPIdC4cB4aHHQunCmMU7lK4Q+FbFAa1FM7vas95qaUwT8/TSlthGr5ruf7fF96vy63N6w5bCpf19PpzWmkpnNfD5To/Onzb1Ct5IycoTDt8yEtthfX0IFQ4KOob5cJF4+FKYZBChZnCHQq3FAYpVJgp3KFwS2GQQoXZsnx52VD+t4VNChUqDFKosIXCUxc233J3LRy3/Fc/nY8o8xuD5kZ6fstdPK5u/1TnFJP00apIG2sW3k8OXl8cvnWVFlaPRWMjVb+FRdVQND5qKVyWgesDt24uvcuJoZYn7/4pVKhwL4W96li4qF8uh+SIPefa0vNBMTrihiGbbifZn4ZHmE7qij1nE7/nv8/TY24ZETkm2Jf01LbnxGj6ZPDjhPvpX/Hbo8cBr/9ru0gKFZ4/hZdfOHr7m2abyy6MfFtw+N6bBAAAAAAAAAAAAAAAAAAAAACAX34CrC5ayvgCOKgAAAAASUVORK5CYII="
        },
        {
            text: "Netlify",
            iconas: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"
        },
        {
            text: "Vercel",
            iconas: "https://avatars.githubusercontent.com/u/14985020?s=280&v=4"
        },
        {
            text: "Replit",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/768px-Repl.it_logo.svg.png"
        },
        {
            text: "VS Code",
            iconas: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
        }
    ]

    return <Box id="skills" w="full" bg="#13022C" color="#ffffff" p="30px 0px" mt="-2px" pt="57px">
        <Box w="85%" m="auto">
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills</Text>
            <Tabs variant='unstyled'>
                <TabList m="10px auto" w={["80%", "85%", "55%"]} gap="5px" justifyContent="space-between">
                    <Tab p={["5px", "10px", "8px 10px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>All Skills</Tab>
                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Frontend</Tab>
                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Backend</Tab>
                    <Tab p={["5px", "10px", "8px 15px"]} fontSize={["10px", "15px", "20px"]} bg="#C1B6DB" _selected={{ color: '#13022c', bg: '#48B3E9 ' }}>Tools</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {allskills && allskills.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skills-card" p={["5px", "7px", "8px"]}>
                                        {/*<Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color='white' />*/}
                                        <Image className="skills-card-img" width={["33%", "37%", "39%"]} m="auto" src={el.iconas}></Image>
                                        <Text className="skills-card-name" fontSize={["10px", "15px", "20px"]} fontFamily="inherit" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {frontend && frontend.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["33%", "37%", "39%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="inherit" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {backend && backend.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["33%", "37%", "39%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="inherit" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["15px", "15px", "10px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {tools && tools.map((el) => {
                                return <Box className="skillouter" p={["10px", "15px", "19px"]} h={["110px", "150px", "170px"]}>
                                    <Box className="skillinner" p={["5px", "7px", "15px"]}>
                                        <Image width={["33%", "37%", "39%"]} m="auto" src={el.iconas}></Image>
                                        <Text fontSize={["10px", "15px", "20px"]} fontFamily="inherit" mt="10px">{el.text}</Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
}

export default Skills;