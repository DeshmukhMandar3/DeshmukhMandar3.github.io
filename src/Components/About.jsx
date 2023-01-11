import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="about"
    >
      <Text
        color="rgb(100,255,218)"
        fontSize={"30px"}
        textAlign="left"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        01. About Me
      </Text>
      <Flex
        margin={{ md: "20px", base: "10px" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Box padding={"25px"} width={{ base: "100%", md: "35%" }}>
          <img
            src="https://64.media.tumblr.com/0844334042d17f6b6bd93edd92533e0c/368170b69bc006c4-e0/s540x810/9b815b8d0e71928448850f82c9c66459f01910bb.pnj"
            alt="headshot"
            style={{
              width: "700px",
              border: "solid rgb(100,255,218) 3px",
              borderTopLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          />
        </Box>
        <Box
          padding={{ md: "45px" }}
          width={{ base: "100%", md: "65%" }}
          textAlign={"left"}
        >
          <Text color={"white"} fontSize={{ base: "25px", md: "30px" }}>
            I'm Mandar Deshmukh
          </Text>
          <Text
            color={"rgb(205,215,246)"}
            fontSize={{ base: "20px", md: "25px" }}
          >
            A competant web developer, skilled in the MERN stack with 1200+
            hours of practical coding. Knowledge of HTML, CSS, Javascript etc.
            Highly adaptable and avid learner. Aims to leverage knowledge and
            build worldclass Web applications while facilitating organization in
            achieving functional goals.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
