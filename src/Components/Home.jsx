import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  // new Typewriter("#typewriter", {
  // strings: ["Hello", "World"],
  // autoStart: true,
  // });
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
        <Typewriter
          options={{
            strings: ["I'm a Full Stack Web Developer."],
            autoStart: true,
            loop: true,
          }}
        />
      </Text>
      <Box
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        marginTop={"20px"}
      >
        <a
          href="Mandar-Deshmukh-Resume.pdf"
          download={"Mandar-Deshmukh-Resume.pdf"}
        >
          <Button
            bg={"rgb(11,45,42)"}
            border={"solid rgb(100,255,218)"}
            _hover={{
              bg: "rgb(11,25,46)",
            }}
            fontSize={"20px"}
          >
            Resume
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Home;
