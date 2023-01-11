import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaPeopleArrows } from "react-icons/fa";
import { SiRedux, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { TbBrandNextjs, TbBulb } from "react-icons/tb";
import { DiGit, DiVisualstudio } from "react-icons/di";
import "./skills.css";

const Skills = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="skills"
    >
      <Text
        color="rgb(100,255,218)"
        fontSize={"30px"}
        textAlign="left"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        02 Skills
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={{ base: 5, md: 10 }}
        color={"rgb(205,215,246)"}
        margin={{ md: "25px" }}
        paddingLeft={{ md: "25px" }}
        paddingTop={"10"}
      >
        <Box className={"Skills"}>
          <AiFillHtml5 className={"Skill_icons"} />
          <Text className={"skill_text"}>HTML</Text>
        </Box>
        <Box className={"Skills"}>
          <RiCss3Fill className={"Skill_icons"} />
          <Text className={"skill_text"}>CSS</Text>
        </Box>
        <Box className={"Skills"}>
          <IoLogoJavascript className={"Skill_icons"} />
          <Text className={"skill_text"}>JavaScript</Text>
        </Box>
        <Box className={"Skills"}>
          <FaReact className={"Skill_icons"} />
          <Text className={"skill_text"}>React</Text>
        </Box>
        <Box className={"Skills"}>
          <SiRedux className={"Skill_icons"} />
          <Text className={"skill_text"}>Redux</Text>
        </Box>
        <Box className={"Skills"}>
          <SiTypescript className={"Skill_icons"} />
          <Text className={"skill_text"}>TypeScript</Text>
        </Box>
        <Box className={"Skills"}>
          <TbBrandNextjs className={"Skill_icons"} />
          <Text className={"skill_text"}>NextJS</Text>
        </Box>
        <Box className={"Skills"}>
          <SiCypress className={"Skill_icons"} />
          <Text className={"skill_text"}>Cypress</Text>
        </Box>
        <Box className={"Skills"}>
          <IoLogoNodejs className={"Skill_icons"} />
          <Text className={"skill_text"}>NodeJS</Text>
        </Box>
        <Box className={"Skills"}>
          <SiExpress className={"Skill_icons"} />
          <Text className={"skill_text"}>ExpressJS</Text>
        </Box>
        <Box className={"Skills"}>
          <SiMongodb className={"Skill_icons"} />
          <Text className={"skill_text"}>MongoDB</Text>
        </Box>
        <Box className={"Skills"}>
          <DiGit className={"Skill_icons"} />
          <Text className={"skill_text"}>Git</Text>
        </Box>
        <Box className={"Skills"}>
          <AiFillGithub className={"Skill_icons"} />
          <Text className={"skill_text"}>GitHub</Text>
        </Box>
        <Box className={"Skills"}>
          <DiVisualstudio className={"Skill_icons"} />
          <Text className={"skill_text"}>VS code</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
