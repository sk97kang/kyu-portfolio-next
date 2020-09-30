import React from "react";
import LinkButton from "./LinkButton";

import styled from "styled-components";

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(images/banner.jpg);
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    padding: 150px 50px 100px;
  }

  @media (max-width: 600px) {
    padding: 150px 20px 100px;
  }
`;

const TextBox = styled.div`
  & h2 {
    font-size: 3em;
    color: #fff;
    font-weight: 500;
    line-height: 1.5em;
  }

  & h2 span {
    font-size: 1.5em;
    font-weight: 700;
  }

  & h3 {
    font-size: 3em;
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 991px) {
    & h2 {
      font-size: 1.5em;
    }
    & h3 {
      font-size: 1em;
    }
  }
`;

function Banner() {
  return (
    <Container id="home">
      <TextBox>
        <h2>
          안녕하세요 <br />
          <span>강성규 입니다</span>
        </h2>
        <h3>I'm a Front End Web Developer</h3>
        <LinkButton href="#about" text="About Me" />
      </TextBox>
    </Container>
  );
}

export default Banner;
