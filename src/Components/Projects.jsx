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
        fontSize={"30px"}
        textAlign="left"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        03 Projects
      </Text>
      <Box margin={{ md: "25px" }} display={{ md: "block", base: "none" }}>
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
            <Box className="project_title">Shopetronics.com</Box>
            <Box className="project_description">
              Shopetronics is a clone of e-commerce website called GeekBuying.
              which sells electronics across the globe. This is individual
              project developed in the time span of 6 days.
            </Box>
            <Box className="project_tectstack">
              HTML | CSS | JavaScript | React | Chakra-UI
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
            <Box className="project_title_2">BestReads.com</Box>
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

        {/* 1mg.com */}
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
              src="https://64.media.tumblr.com/f846fa4100422a8f98cb43c430d70423/e630c32c71137eb6-13/s1280x1920/3beca2859082662bc978e524559ec6231f967f7f.pnj"
            />
          </Box>
          <Box className="ProjectInformation">
            {" "}
            <Box className="project_title">TATA 1mg.com</Box>
            <Box className="project_description">
              This website is clone of pharmacy e-commerce website called TATA
              1mg. which sells medicines and other medical stuff online. This is
              an individual project developed in the span of 5 days.
            </Box>
            <Box className="project_tectstack">HTML | CSS | JavaScript</Box>
            <Flex className="project_links">
              <Box margin={"5px"}>
                <a
                  href="https://inspiring-piroshki-0a93fe.netlify.app/"
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
                  href="https://github.com/DeshmukhMandar3/gaudy-week-5323"
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
        {/* Hotstar */}
        <Flex
          alignItems={"center"}
          padding={"25px"}
          w="100%"
          margin="auto"
          marginTop={"25px"}
        >
          <Box className="ProjectInformation_2">
            {" "}
            <Box className="project_title_2">Hotstar.com</Box>
            <Box className="project_description_2">
              This Application shows different movie Posters with the help of
              carousel. It is also having sorting functionality. which sort
              movies according to ratings.
            </Box>
            <Box className="project_tectstack_2">HTML | CSS | JavaScript</Box>
            <Flex className="project_links_2">
              <Box margin={"5px"}>
                <a
                  href="https://github.com/DeshmukhMandar3/Hotstar-application"
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
                  href="https://hotstar-nine.vercel.app/"
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
              src="https://64.media.tumblr.com/8fea176c92ccdac9096be59adf2aec82/17086dc4460b8391-94/s1280x1920/6c0e11c252c5cfd0636855a91f9de158e7ede7ad.pnj"
            />
          </Box>
        </Flex>
      </Box>

      <Box display={{ sm: "block", md: "none", lg: "none" }} padding={"20px"}>
        {/* Shopetornics */}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/6f342ad10eb2960144419588e96441d5/97f1e4d4c2fbfd77-0b/s1280x1920/c27fd2674a5efdf2860dad41dbabfef1f9bf7ea0.pnj"
          />
          <Box className="project_title_small">Shopetronics.com</Box>
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
          <Box className="project_title_small">BestReads.com</Box>
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

        {/* 1mg.com */}
        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/f846fa4100422a8f98cb43c430d70423/e630c32c71137eb6-13/s1280x1920/3beca2859082662bc978e524559ec6231f967f7f.pnj"
          />
          <Box className="project_title_small">TATA 1mg.com</Box>
          <Box className="project_tectstack_small">HTML | CSS | JavaScript</Box>
          <Box className="project_description_small">
            This website is clone of pharmacy e-commerce website called TATA
            1mg. which sells medicines and other medical stuff online. This is
            an individual project developed in the span of 5 days.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/DeshmukhMandar3/gaudy-week-5323"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://inspiring-piroshki-0a93fe.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </Box>
          </Flex>
        </Box>

        <Box className="Projects_small">
          <Image
            borderRadius={"5px"}
            src="https://64.media.tumblr.com/8fea176c92ccdac9096be59adf2aec82/17086dc4460b8391-94/s1280x1920/6c0e11c252c5cfd0636855a91f9de158e7ede7ad.pnj"
          />
          <Box className="project_title_small">Hotstar.com</Box>
          <Box className="project_tectstack_small">HTML | CSS | JavaScript</Box>
          <Box className="project_description_small">
            This Application shows different movie Posters with the help of
            carousel. It is also having sorting functionality. which sort movies
            according to ratings.
          </Box>
          <Flex className="project_links_small">
            <Box className="project_link_small">
              <a
                href="https://github.com/DeshmukhMandar3/Hotstar-application"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
            </Box>
            <Box className="project_link_small">
              <a
                href="https://hotstar-nine.vercel.app/"
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
