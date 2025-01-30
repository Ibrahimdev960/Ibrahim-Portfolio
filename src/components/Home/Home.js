import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Ibrahim Khan</Name>
        <Title>Full stack Developer</Title>
        <p>
  I <span className="change-text"></span>{" "}
  <span className="responsive">b</span>
  <span className="responsive">u</span>
  <span className="responsive">i</span>
  <span className="responsive">l</span>
  <span className="responsive">d</span>{" "}
  <span className="responsive">s</span>
  <span className="responsive">c</span>
  <span className="responsive">a</span>
  <span className="responsive">l</span>
  <span className="responsive">a</span>
  <span className="responsive">b</span>
  <span className="responsive">l</span>
  <span className="responsive">e</span> web applications.
</p>

        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="https://www.instagram.com/ibrahim96034"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </Social>
          <Social
            href="ibrahim96034@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/Ibrahimk2258365?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
        </Socials>
        {/* <Quote>Don't wish for it! Work for it!</Quote> */}
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
