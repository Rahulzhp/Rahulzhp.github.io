import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


function Project() {

    let projectdata = [
        {
            name: "Beauty-Bebo Clone",
            img: "https://i.ibb.co/wyz1tzx/Screenshot-185.png",
            type: "Individual",
            desc: "A Online retail store where users can buy there day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.",
            techstack: "React, CHakra UI, JavaScript, Css",
            livelink: "https://incandescent-gaufre-5716af.netlify.app/",
            gitlink: "https://github.com/Rahulzhp/kaput-boundary-7997"
        },
        {
            name: "Rodan+Fields Clone",
            img: "https://i.ibb.co/GckpFrQ/Screenshot-187.png",
            type: "Collaborative",
            desc: "Rodan + Fields is a skincare website which allows users to buy Best Skincare products  and also helps to cure skin diseases from expert. ",
            techstack: "JavaScript, html,css",
            livelink: "https://rodan-fileds-12-masai.netlify.app/",
            gitlink: "https://github.com/imrangadwal10/zonked-instrument-5361"
        },

        {
            name: "Lose It Clone",
            img: "https://i.ibb.co/8B0xKSr/Screenshot-195.png",
            type: "Individual",
            desc: "Lose It! is a calorie counter & food diary diet app that helps you stick to your diet and achieve weight loss that fits! It was created with the goal of helping members reach a healthy weight by providing them with the tools they need for success.",
            techstack: "React, CHakra UI, JavaScript, Css",
            livelink: "https://instinctive-start-5063.vercel.app/",
            gitlink: "https://github.com/Rahulzhp/instinctive-start-5063"
        },
        // {
        //     name: "Recipe App",
        //     img: "",
        //     desc: "",
        //     livelink: "https://courageous-valkyrie-f0e4b0.netlify.app/",
        //     gitlink: ""
        // },
        // {
        //     name: "Netflix Clone",
        //     img: "",
        //     desc: "",
        //     livelink: "",
        //     gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/netflixcopy"
        // }
    ]


    return <Box id="Project" w="full" bg="#13022C" color="#ffffff" p="30px 0px" textAlign="center" pt="100px">
        <Box w="85%" m="auto">
            <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">

                {projectdata && projectdata.map((project) => {
                    return <Box className="projectouter">
                        <Box display={["inline", "inline", "flex"]} justifyContent="space-between">
                            <Image w={["100%", "97%", "59%"]} m="auto" src={project.img} alt="project-thumbnail" />
                            <Box w={["100%", "97%", "40%"]} m="auto">
                                <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
                                <Text w={["100%", "90%", "70%"]} m="auto" fontFamily="inherit" textAlign="justify" fontSize={["sm", "md", "md"]}>{project.desc}
                                    <Text fontSize={["sm", "md", "md"]} fontWeight="bold" >Project type :-{project.type} </Text>

                                </Text>
                                <Box textAlign="left" m="auto" p={["2px 0px", "2px 7px", "2px 1px"]} w={["99%", "93%", "70%"]}>

                                    <Text fontSize={["13px", "15px", "16px"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
                                </Box>
                                <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
                                    {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                                    <Button as='a' target='_blank' href={project.livelink} _hover={{ bg: "#4E406F", color: "#ffffff" }} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                    <Button as='a' target='_blank' href={project.gitlink} _hover={{ bg: "#4E406F", color: "#ffffff" }} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                })}

            </Box>
        </Box>
    </Box>
}

export default Project;