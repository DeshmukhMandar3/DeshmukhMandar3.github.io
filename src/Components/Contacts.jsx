import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import "./Contacts.css";

const Contacts = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="contact"
    >
      <Text
        color="rgb(100,255,218)"
        fontSize={"30px"}
        textAlign="left"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        05 Contact
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 3 }}>
        <Box className="contact_cards">
          <Box className="icon">
            <AiOutlineMail />
          </Box>
          <Text className="contact_card_header">Email</Text>
          <a
            href="mailto:mandardeshmukh.mud@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Text className="content">mandardeshmukh.mud@gmail.com</Text>
          </a>
        </Box>
        <Box className="contact_cards">
          <Box className="icon">
            <AiOutlinePhone />
          </Box>
          <Text className="contact_card_header">Contact Number</Text>
          <Text className="content">+91 8087352864</Text>
        </Box>
        <Box className="contact_cards">
          <Text className="contact_card_header-social">Social Media</Text>
          <Box className="icon">
            <a
              href="https://www.linkedin.com/in/mandar-deshmukh-62821b189/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/DeshmukhMandar3"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contacts;
