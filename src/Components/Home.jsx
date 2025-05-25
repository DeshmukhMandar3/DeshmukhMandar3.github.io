import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

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
        marginTop={{ md: "60px", base: "25px", lg: "60px" }}
      >
        Hi, My name is
      </Text>
      <Text
        fontSize={{ md: "50px", base: "30px" }}
        fontWeight="bold"
        color={"white"}
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        marginTop={{ md: "35px", base: "15px", lg: "35px" }}
      >
        Mandar Deshmukh
      </Text>

      <Text
        fontSize={{ md: "50px", base: "30px" }}
        fontWeight="bold"
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        color={"rgb(205,215,246)"}
        marginTop={{ md: "35px", base: "15px", lg: "35px" }}
      >
        <Typewriter
          options={{
            strings: [
              "I'm a Full Stack Web Developer.",
              "I build things for the Web.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Text>
      <Box
        textAlign={"left"}
        margin={{ md: "20px", base: "10px" }}
        marginTop={{ md: "35px", base: "25px", lg: "35" }}
      >
        <a
          href={"fw21_0860-Mandar-Deshmukh-Resume.pdf"}
          onClick={() =>
            window.open(
              `https://drive.google.com/file/d/19hVto_OtjE1IALwcBG89TqeCGpZnY0nI/view?usp=drive_link`
            )
          }
          rel="noreferrer"
          target="_blank"
        >
          <Button
            bg={"rgb(11,45,42)"}
            border={"solid rgb(100,255,218)"}
            _hover={{
              bg: "rgb(11,25,46)",
            }}
            fontSize={"20px"}
            marginBottom={"45px"}
          >
            Resume
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Home;
