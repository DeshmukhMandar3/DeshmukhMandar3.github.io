import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import "./Projects.css";

const Projects = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "rgb(10,23,46)",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      id="projects"
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
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          PROJECTS
        </span>
      </Text>
      <Box margin={{ md: "25px" }} display={{ md: "block", base: "none" }}>
        {/* CruiseRental*/}
        <Flex
          alignItems={"center"}
          padding={"25px"}
          w="100%"
          margin="auto"
          marginTop={"25px"}
        >
          <Box w="60%" bg={"brown"} borderRadius={"5px"}>
            <Image
              borderRadius={"5px"}
              src="https://64.media.tumblr.com/ba4e3bc3e6978d8235633c97ec03ffbf/e73fa51cb24bdecf-58/s1280x1920/698b71c9a51fb7998d11774e0dfac1fbf1578aa7.pnj"
            />
          </Box>
          <Box className="ProjectInformation">
            {" "}
            <Box className="project_title">CruiseRental</Box>
            <Box className="project_description">
              A Car Rental Website inspired from AVIS.com. Built by group of 5
              in a week. Contains Landing Page, User Authentication, Car
              Details, Checkout Page and a seperate Admin Panel.
            </Box>
            <Box className="project_tectstack" paddingBottom={"0px"}>
              ReactJS | Redux | Typescript
            </Box>
            <Box
              className="project_tectstack"
              paddingTop={"0px"}
              paddingBottom={"0px"}
            >
              {" "}
              MongoDB | ExpressJS | NodeJS
            </Box>
            <Box className="project_tectstack" paddingTop={"0px"}>
              Chakra-UI
            </Box>
            <Flex className="project_links">
              <Box margin={"5px"}>
                <a
                  href="https://cruise-rental-admin-panel.vercel.app"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Live&nbsp;{" "}
                    <span class="material-symbols-outlined">open_in_new</span>
                  </Button>
                </a>
              </Box>
              <Box margin={"5px"}>
                <a
                  href="https://github.com/shikhu51197/Avis-Rentals"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Github&nbsp;
                    <AiFillGithub />
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* Oasis */}
        <Flex
          alignItems={"center"}
          padding={"25px"}
          w="100%"
          margin="auto"
          marginTop={"25px"}
        >
          <Box className="ProjectInformation_2">
            {" "}
            <Box className="project_title_2">Oasis</Box>
            <Box className="project_description_2">
              Oasis is a clone of website called Shopclues.com. Which is an
              e-commerce website selling variety of products. This was a
              collaborative project of 4 members completed in time span of 5
              days.
            </Box>
            <Box className="project_tectstack_2" paddingBottom="0px">
              HTML | CSS | JavaScript
            </Box>
            <Box className="project_tectstack_2" paddingTop="0px">
              ReactJS | Chakra-UI
            </Box>
            <Flex className="project_links_2">
              <Box margin={"5px"}>
                <a
                  href="https://github.com/DeshmukhMandar3/plucky-cub-1995"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Github&nbsp;
                    <AiFillGithub />
                  </Button>
                </a>
              </Box>
              <Box margin={"5px"}>
                <a
                  href="https://oasis-shop.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Live&nbsp;
                    <span class="material-symbols-outlined">open_in_new</span>
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
          <Box w="60%" bg={"brown"} borderRadius={"5px"}>
            <Image
              borderRadius={"5px"}
              src="https://64.media.tumblr.com/4fd56442a33295d9f6b3e680f834afa7/2877a4872bf0aa5d-04/s1280x1920/117b55f7f30c155b2b57951f06f1fe050376da2f.pnj"
            />
          </Box>
        </Flex>

        {/* Shopetronics */}
        <Flex alignItems={"center"} padding={"25px"} w="100%" margin="auto">
          <Box w="60%" bg={"brown"} borderRadius={"5px"}>
            <Image
              borderRadius={"5px"}
              src="https://64.media.tumblr.com/6f342ad10eb2960144419588e96441d5/97f1e4d4c2fbfd77-0b/s1280x1920/c27fd2674a5efdf2860dad41dbabfef1f9bf7ea0.pnj"
            />
          </Box>
          <Box className="ProjectInformation">
            {" "}
            <Box className="project_title">Shopetronics</Box>
            <Box className="project_description">
              Shopetronics is a clone of e-commerce website called GeekBuying.
              which sells electronics across the globe. This is individual
              project developed in the time span of 6 days.
            </Box>
            <Box className="project_tectstack" paddingBottom="0px">
              HTML | CSS | JavaScript
            </Box>
            <Box className="project_tectstack" paddingTop="0px">
              React | Chakra-UI
            </Box>
            <Flex className="project_links">
              <Box margin={"5px"}>
                <a
                  href="https://shopetronics.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    {" "}
                    Live&nbsp;
                    <span class="material-symbols-outlined">open_in_new</span>
                  </Button>
                </a>
              </Box>
              <Box margin={"5px"}>
                <a
                  href="https://github.com/DeshmukhMandar3/-violet-spark-1183"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Github&nbsp;
                    <AiFillGithub />
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* BestReads */}
        <Flex
          alignItems={"center"}
          padding={"25px"}
          w="100%"
          margin="auto"
          marginTop={"25px"}
        >
          <Box className="ProjectInformation_2">
            {" "}
            <Box className="project_title_2">BestReads</Box>
            <Box className="project_description_2">
              BestReads.com is a clone of IdeaKart.com. which provides
              information about different books users can read. This project was
              developed by team of five in time span of 5 days.
            </Box>
            <Box className="project_tectstack_2">HTML | CSS | JavaScript</Box>
            <Flex className="project_links_2">
              <Box margin={"5px"}>
                <a
                  href="https://github.com/DeshmukhMandar3/past-underwear-3653"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Github&nbsp;
                    <AiFillGithub />
                  </Button>
                </a>
              </Box>
              <Box margin={"5px"}>
                <a
                  href="https://reliable-kashata-dfa0d1.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Button
                    bg={"rgb(11,45,42)"}
                    border={"solid rgb(100,255,218)"}
                    _hover={{
                      bg: "rgb(11,25,46)",
                    }}
                    fontSize={"18px"}
                  >
                    Live&nbsp;
                    <span class="material-symbols-outlined">open_in_new</span>
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
          <Box w="60%" bg={"brown"} borderRadius={"5px"}>
            <Image
              borderRadius={"5px"}
              src="https://64.media.tumblr.com/a778c4c577e6dc472c0939bb3862cc09/c35e69207ce998c3-07/s1280x1920/87a7fd8a50b0a04cf69afd0f12105c476d995989.pnj"
            />
          </Box>
        </Flex>
      </Box>

      {/* Small Screen Projects */}

      <Box display={{ base: "block", md: "none", lg: "none" }} padding={"20px"}>
        {/*CruiseRental*/}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/f846fa4100422a8f98cb43c430d70423/e630c32c71137eb6-13/s1280x1920/3beca2859082662bc978e524559ec6231f967f7f.pnj"
          />
          <Box className="project_title_small">CruiseRental</Box>
          <Box className="project_tectstack_small">
            ReactJS | Redux | Typescript | Chakra-UI | MongoDB | ExpressJS |
            NodeJS
          </Box>
          <Box className="project_description_small">
            A Car Rental Website inspired from AVIS.com. Built by group of 5 in
            time span of 5 days. Contains Landing Page, User Authentication, Car
            Details, Checkout Page and a seperate Admin Panel.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/shikhu51197/Avis-Rentals"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://cruise-rental-admin-panel.vercel.app"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </Box>
          </Flex>
        </Box>

        {/* Oasis */}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/4fd56442a33295d9f6b3e680f834afa7/2877a4872bf0aa5d-04/s1280x1920/117b55f7f30c155b2b57951f06f1fe050376da2f.pnj"
          />
          <Box className="project_title_small">Oasis</Box>
          <Box className="project_tectstack_small">
            HTML | CSS | JavaScript | ReactJS | Chakra-UI
          </Box>
          <Box className="project_description_small">
            Oasis is a clone of website called Shopclues.com. Which is an
            e-commerce website selling variety of products. This was a
            collaborative project of 4 members completed in time span of 5 days.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/DeshmukhMandar3/plucky-cub-1995"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://oasis-shop.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </Box>
          </Flex>
        </Box>

        {/* Shopetornics */}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/6f342ad10eb2960144419588e96441d5/97f1e4d4c2fbfd77-0b/s1280x1920/c27fd2674a5efdf2860dad41dbabfef1f9bf7ea0.pnj"
          />
          <Box className="project_title_small">Shopetronics</Box>
          <Box className="project_tectstack_small">
            HTML | CSS | JavaScript | React | Chakra-UI
          </Box>
          <Box className="project_description_small">
            Shopetronics is a clone of e-commerce website called GeekBuying.
            which sells electronics across the globe. This is individual project
            developed in the time span of 6 days.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/DeshmukhMandar3/-violet-spark-1183"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://shopetronics.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </Box>
          </Flex>
        </Box>

        {/* BestReads */}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/a778c4c577e6dc472c0939bb3862cc09/c35e69207ce998c3-07/s1280x1920/87a7fd8a50b0a04cf69afd0f12105c476d995989.pnj"
          />
          <Box className="project_title_small">BestReads</Box>
          <Box className="project_tectstack_small">HTML | CSS | JavaScript</Box>
          <Box className="project_description_small">
            BestReads.com is a clone of IdeaKart.com. which provides information
            about different books users can read. This project was developed by
            team of five in time span of 5 days.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/DeshmukhMandar3/past-underwear-3653"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://reliable-kashata-dfa0d1.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
