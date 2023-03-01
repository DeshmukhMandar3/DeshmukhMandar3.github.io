import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
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
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "20px", base: "10px" }}
        marginBottom="25px"
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          CONTACTS
        </span>
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1, lg: 1 }}
          padding={{ base: "20px", sm: "20px", md: "45px", lg: "45px" }}
          paddingTop={{ base: "8px", sm: "8px", md: "8px", lg: "8px" }}
        >
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
        <Box className="form">
          <Text color={"rgb(100, 255, 218)"} fontSize="25px">
            Send me a message
          </Text>
          <form
            action="https://getform.io/f/4c7f4c3d-b837-48eb-a797-0c571063d3f4"
            method="POST"
          >
            <Input
              mt="5"
              name="name"
              placeholder="Your Full Name"
              color="rgb(100, 255, 218)"
            />

            <Input
              mt="10"
              type="email"
              name="email"
              placeholder="Your Email Adress"
              color="rgb(100, 255, 218)"
            />

            <Textarea
              name="message"
              mt="10"
              placeholder="Enter your Message here"
              color="rgb(100, 255, 218)"
            />
            <Button
              type="submit"
              mt="8"
              bg={"rgb(11,45,42)"}
              border={"solid rgb(100,255,218)"}
              _hover={{
                bg: "rgb(11,25,46)",
              }}
              fontSize={"20px"}
              formTarget="_blank"
              color="white"
            >
              Submit
            </Button>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contacts;
