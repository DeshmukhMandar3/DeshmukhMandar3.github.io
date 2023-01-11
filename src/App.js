import "./App.css";
import { Button, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import { Link } from "react-scroll";
import MyStats from "./Components/MyStats";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <MyStats />
      <Projects />
      <Contacts />
      <Button
        style={{
          position: "fixed",
          right: "5%",
          color: "rgb(100,255,218)",
          backgroundColor: "transparent",
          border: "solid rgb(100,255,218) 1px",
        }}
        top={{ base: "600px", md: "900px", lg: "450px" }}
      >
        <Link to="home" smooth="true" offset={-50}>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default App;
