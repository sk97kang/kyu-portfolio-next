import React from "react";
import Section from "./Section";

import styled from "styled-components";
import LinkButton from "./LinkButton";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const WorkBox = styled.div`
  width: 50%;
  padding: 20px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 991px) {
    width: 100%;
    padding: 10px;
  }
`;

const Img = styled.img`
  max-width: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;

function Work() {
  return (
    <Section title="Our Lastest Work" id="work">
      <Content>
        <WorkBox>
          <Img src="images/product1.jpg" />
        </WorkBox>
        <WorkBox>
          <Img src="images/product2.jpg" />
        </WorkBox>
        <WorkBox>
          <Img src="images/product3.jpg" />
        </WorkBox>
        <WorkBox>
          <Img src="images/product4.jpg" />
        </WorkBox>
      </Content>
      <Heading>
        <LinkButton href="#" text="View More" />
      </Heading>
    </Section>
  );
}

export default Work;
