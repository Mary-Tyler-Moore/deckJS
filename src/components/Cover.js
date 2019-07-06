import React from "react";
import { Header } from "../components";
import logo from "../assets/logo.png";
import { Container, Hero, HeroHeader, HeroBody, Title } from "bloomer";

const textStore = {
  main: {
    middle: {
      __html: `Thanks for your interest in Native Mobile Applications.`
    },
    small: {
      __html: `I build blazing fast websites with with React and GatsbyJS. I also developed Android and IOS Applications.`
    }
  },
  text: [
    "Imagine creating a static webapp on JS.",
    "Imagine your best slide deck",
    `Why can't they be one?`
  ],
  frames: [
    <iframe
      key="0"
      //src="https://cdn.cultofmac.com/wp-content/uploads/2013/06/noshredderinPassbook1.gif"
      frameborder="0"
      scrolling="0"
      width="1000px"
      height="2000px"
    />
  ]
};

const Cover = () => (
  <Hero isFullHeight isColor="primary">
    <HeroHeader>
      <Header />
    </HeroHeader>

    <HeroBody>
      <Container hasTextAlign="centered">
        <img src={logo} style={{ height: "12rem", margin: "0 0 2rem 0" }} />
        <Title className="is-size-2 is-size-4-mobile has-text-weight-light">
          Now available on IOS and Android.{" "}
          <span className="has-text-weight-normal">PMG Rentals</span>, a{" "}
          <span className="has-text-weight-normal">beautiful</span> application{" "}
          <span className="has-text-weight-normal">
            created with React-Native
          </span>
          .
        </Title>
        <Title
          className="is-size-3 is-size-5-mobile has-text-weight-light"
          dangerouslySetInnerHTML={textStore.main.middle}
        />
        <Title
          className="is-size-4 is-size-6-mobile has-text-weight-light"
          dangerouslySetInnerHTML={textStore.main.small}
        />
        <div className="isCentered">
          {textStore.frames.map(frame => {
            return frame;
          })}
        </div>
      </Container>
    </HeroBody>
  </Hero>
);

export default Cover;
