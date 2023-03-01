import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MyStats = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="stats"
    >
      <Text
        color="rgb(100,255,218)"
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingBottom: "8px",
          }}
        >
          STATS
        </span>
      </Text>

      <div align="center" style={{ margin: "25px" }}>
        <Box
          style={{
            border: "solid rgb(100,255,218)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Text fontSize={"20px"} color="rgb(100,255,218)">
            My Github Contributions
          </Text>
          <img
            align="center"
            src="https://ghchart.rshah.org/DeshmukhMandar3"
            alt="deshmukhmandar3"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          style={{
            border: "solid rgb(100,255,218)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=deshmukhmandar3&show_icons=true&theme=cobalt2"
            alt="Mandar's Github"
          />
        </Box>
        <Box
          style={{
            border: "solid rgb(100,255,218)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=deshmukhmandar3&theme=algolia"
            alt="Mandar's Github"
          />
        </Box>
      </div>
    </Box>
  );
};

export default MyStats;
