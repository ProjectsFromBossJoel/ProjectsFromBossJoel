import { lazy } from "react";
import React from 'react';
import ReactDOM from "react-dom";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import TenioContent from "../../content/TenioContent.json";
import ContactContent from "../../content/ContactContent.json";
import DigitalContent from "../../content/DigitalContent.json";
import Keenvision from "../../content/Keenvision.json";
import UnlockExceptional from "../../content/UnlockExceptional.json";
import RectangleImage from "../../assets/Rectangle102.jpg";
import ContactForm from "./ContactForm";



const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={TenioContent.title}
        content={TenioContent.text}
        button={TenioContent.button}
        icon="ourbrands.svg"
        id="product"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="qbeevents.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={DigitalContent.title}
        content={DigitalContent.text}
        icon="dds.svg"
        id="mission"
      />

<ContentBlock
        direction="right"
        title={Keenvision.title}
        content={Keenvision.text}
        icon="Group8980.svg"
        id="mission"
      />


<div className="image-container">
  <img src={RectangleImage} alt="Rectangle" />
</div>

<ContentBlock
        direction="left"
        title={UnlockExceptional.title}
        content={UnlockExceptional.text}
        icon="Image6.svg"
        id="blackrectangle"
      />
      
  


      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
