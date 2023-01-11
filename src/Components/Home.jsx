import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        color: "rgb(100,255,218)",
        marginTop: "60px",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="home"
    >
      <Text
        textAlign={"left"}
        fontSize={{ md: "30px", base: "20px" }}
        margin={{ md: "20px", base: "10px" }}
        marginBottom={"10px"}
      >
        Hi, My name is
      </Text>
      <Text
        fontSize={{ md: "60px", base: "30px" }}
        fontWeight="bold"
        color={"white"}
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        marginTop={"0px"}
      >
        Mandar Deshmukh.
      </Text>
      <Text
        fontSize={{ md: "60px", base: "30px" }}
        fontWeight="bold"
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        marginTop={"0px"}
        color={"rgb(205,215,246)"}
      >
        I'm a Full Stack Web Developer.
      </Text>
    </Box>
  );
};

export default Home;
