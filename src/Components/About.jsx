import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "../";

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
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "25px", base: "10px" }}
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          ABOUT ME
        </span>
      </Text>
      <Flex
        margin={{ md: "20px", base: "10px" }}
        flexDirection={{ base: "column", md: "row", sm: "row" }}
        alignItems={"center"}
      >
        <Box padding={"25px"} width={{ base: "100%", md: "35%", sm: "45%" }}>
          <img
            src="https://64.media.tumblr.com/2c83b1c409bd9b9a2dbb01aed262b991/b7e14e3195c6d7ff-da/s1280x1920/1fd4b30a0aef87d1fcf987481c514efc0ea1f411.jpg"
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
