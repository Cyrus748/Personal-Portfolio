import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import sportsmeet from "../../assets/project/sportsmeet.png";
import ques from "../../assets/project/question.jpg";
import todo from "../../assets/project/todo1.jpg";
import dictionary from "../../assets/project/dictionary.jpg";
import bootcamp from "../../assets/project/bootcamp.jpg";
import portfolio from "../../assets/project/portfolio.jpg";
import interactivecard from "../../assets/project/interactivecard.jpg";
import Calculator from "../../assets/project/sgpaCalculator.jpg"
import Training from "../../assets/project/training-tracker.png"
import hukamnama  from "../../assets/project/hukamnama.png"


export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={sportsmeet}
            projectName={"BharatSanskriti - Cultural Heritage Archive"}
            aboutProject={"TExplore the timeless wisdom of the Bhagavad Gita with in-depth shlokas, translations, and commentaries, connecting you to India's rich spiritual heritage. "}
            techStack={" React, Node.js, MongoDB "}
            projectLiveLink="https://bharat-sanskriti.vercel.app/"
            projectLink="https://github.com/Cyrus748/BharatSanskriti"
          />
          <ProjectCard
            projectImage={Training}
            projectName={"CodeBlitz - Competitive Programming Hub"}
            aboutProject={"Welcome to CodeBlitz ⚡! Inspired by OneCompiler.com, this project provides an interactive online coding environment that supports multiple programming languages."}
            techStack={"React, Node.js, Express, MongoDB "}
            projectLiveLink="https://code-blitz-code-runner.vercel.app/"
            projectLink="https://github.com/Cyrus748/CodeBlitz-"
          />
          <ProjectCard
            projectImage={hukamnama}
            projectName={"VibeCoin - Real-time Crypto Data & News"}
            aboutProject={"VibeCoin is a React web application built using Vite that provides real-time cryptocurrency data and news."}
            techStack={"React, Vite, WebSockets, Crypto APIs, Tailwind CSS"}
            projectLiveLink="https://vibecoinbyaditya.vercel.app/"
            projectLink="https://github.com/Cyrus748/VibeCoin"
          />
          <ProjectCard
            projectImage={Calculator}
            projectName={"PruneMind Chess Engine"}
            aboutProject={"PruneMind is a Python-based chess engine that utilizes the Minimax algorithm with alpha-beta pruning to evaluate and make optimal moves. It features relative piece values inspired by AlphaZero and includes an entropy-based evaluation for more dynamic gameplay. The engine can play against a human opponent or simulate a match between two AI instances."}
            techStack={"Python, Minimax, Custom Evaluation "}
            projectLiveLink="https://github.com/Cyrus748/PruneMind"
            projectLink="https://github.com/Cyrus748/PruneMind"
          />
          
          <ProjectCard
            projectImage={bootcamp} // Replace virtualLabImage with the actual image source
            projectName={"Sorting-Algorithim-Visualizer"}
            aboutProject={"The Sorting-Algorithm-Visualizer is a dynamic and interactive tool designed to help users visualize and understand various sorting algorithms."}
            techStack={"React, Node.js, Express, MongoDB "}
            projectLiveLink="https://sorting-algorithim-visualizer.vercel.app/" // Replace with the actual live link
            projectLink="https://github.com/Cyrus748/Sorting-Algorithim-Visualizer" // Replace with the actual GitHub repository link
          />

          <ProjectCard
            projectImage={ques}
            projectName={"ERC20TokenETH"}
            aboutProject={"This project demonstrates how to create a basic ERC20 token using Solidity. The ERC20 standard is a widely adopted token standard that defines functionalities for tokens on the Ethereum blockchain."}
            techStack={"Solidity, Ethereum, ERC20 "}
            projectLiveLink="https://github.com/Cyrus748/CreateERC20TokenETH-AVAX-Metacrafters"
            projectLink="https://github.com/Cyrus748/CreateERC20TokenETH-AVAX-Metacrafters"
          />
          <ProjectCard
            projectImage={todo}
            projectName={"Portfolio Website"}
            aboutProject={
              "A modern showcase of development expertise and creative projects Built with passion and deployed with Vercel"
            }
            techStack={
              "JAVASCRIPT, REACT JS , BOOTSTRAP, TAILWIND, VERCEL, REDUX"
            }
            projectLiveLink="https://devbyaditya.vercel.app/home"
            projectLink="https://github.com/Cyrus748/Personal-Portfolio"
          />
          <ProjectCard
            projectImage={dictionary}
            projectName={"Dicitionary Website"}
            aboutProject={"A web based solution for Dictionary which is fetching data from Api"}
            techStack={"JAVASCRIPT , HTML , CSS "}
            projectLiveLink="https://dictionary-website-alpha.vercel.app/"
            projectLink="https://github.com/sangam2109/Dictionary-website"
          />
          <ProjectCard
            projectImage={portfolio} // Replace portfolioImage with the actual image source
            projectName={"Portfolio with React and Chakra UI"}
            aboutProject={"Personal portfolio showcasing skills and projects. Built using ReactJS, Chakra UI, JavaScript, etc."}
            techStack={"ReactJS, Chakra UI, JavaScript"}
            projectLiveLink="https://sangam--portfolio.vercel.app" // Replace with the actual live link
            projectLink="https://github.com/sangam2109/Portfolio-V2" // Replace with the actual GitHub repository link
          />

          <ProjectCard
            projectImage={interactivecard} // Replace interactiveCardImage with the actual image source
            projectName={"Interactive Card"}
            aboutProject={"A visually appealing interactive card resembling a credit card. Developed using HTML, CSS, and JavaScript."}
            techStack={"HTML, CSS, JavaScript"}
            projectLiveLink="https://sangam2109.github.io/Frontend-Interactive-Card/" // Replace with the actual live link
            projectLink="https://github.com/sangam2109/Frontend-Interactive-Card" // Replace with the actual GitHub repository link
          />

        </SimpleGrid>
        
      </Box>
    </Box>
  );
}
