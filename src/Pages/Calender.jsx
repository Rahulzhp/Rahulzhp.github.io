import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text, Image } from "@chakra-ui/react";

function Calender() {
  return (
    <Box id="github-stats-card" bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" margin="auto" color="white" pb="60px">
      <Box w="80%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
        <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px" }}>
          <Text margin="auto" textAlign="center" fontWeight="400" fontSize={["xl", "xl", "4xl"]}>My Github Calender</Text>
          <Box id="github-top-langs" m="auto" fontSize={["sm", "xl", "4xl"]}>
            <GitHubCalendar
              margin="auto"
              username="Rahulzhp"
              blockSize={15}
              blockMargin={5}
              color="#5e0adb"
              fontSize={15}
            />
          </Box>
        </Row>
        <Box display={["inline", "inline", "flex"]} mt={["50px", "55px", "45px"]} m="auto" >
          <Box id="github-top-langs" m="auto" p="12px 3px" w={["90%", "80%", "48%"]}  >
            <Image w="100%" src="https://github-readme-stats.vercel.app/api?username=Rahulzhp&theme=dark&show_icons=true&count_private=true"></Image>
          </Box>
          <Box id="github-streak-stats" m="auto" p="12px 3px" w={["90%", "80%", "48%"]}>
            <Image w="100%" src="https://github-readme-streak-stats.herokuapp.com/?user=Rahulzhp&theme=dark"></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Calender;