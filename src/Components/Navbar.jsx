import React from "react";
// import { ReactNode } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        color: "rgb(100,255,218)",
        position: "fixed",
        width: "100%",
        top: "0",
        fontFamily: "monospace",
        fontSize: "16px",
        zIndex: 3,
      }}
    >
      <Box
        bg={useColorModeValue("rgb(11,25,46)", "gray.900")}
        px={4}
        boxShadow={"2xl"}
        zIndex={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box h={16}>
            <Link to="home" smooth="true" offset={-50}>
              <Image
                src={
                  "https://64.media.tumblr.com/be90c71e572aa0339a37808b8171af09/a834a55044edd722-2b/s500x750/5e20fae94c7b331d4fff933c8dd51f88c08b44f3.pnj"
                }
                height="100%"
              />
            </Link>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{ bg: "rgb(11,25,46)" }}
            bg={"rgb(11,25,46)"}
            border={"solid rgb(100,255,218)"}
          />

          <SimpleGrid
            columns={7}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            spacing={10}
          >
            <Link to="home" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}> Home</Text>
            </Link>
            <Link to="about" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>About</Text>
            </Link>
            <Link to="skills" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Skills</Text>
            </Link>
            <Link to="projects" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Projects</Text>
            </Link>
            <Link to="stats" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Stats</Text>
            </Link>
            <Link to="contact" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Contact</Text>
            </Link>
            <Button
              bg={"rgb(11,45,42)"}
              border={"solid rgb(100,255,218)"}
              _hover={{
                bg: "rgb(11,25,46)",
              }}
            >
              <a
                href="https://drive.google.com/file/d/19hVto_OtjE1IALwcBG89TqeCGpZnY0nI/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Button>
          </SimpleGrid>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="home"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Projects
              </Link>
              <Link
                to="stats"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Stats
              </Link>
              <Link
                to="contact"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Contact
              </Link>
              <Button
                bg={"rgb(11,45,42)"}
                border={"solid rgb(100,255,218)"}
                _hover={{
                  bg: "rgb(11,25,46)",
                }}
              >
                <a
                  href="https://drive.google.com/file/d/19hVto_OtjE1IALwcBG89TqeCGpZnY0nI/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
