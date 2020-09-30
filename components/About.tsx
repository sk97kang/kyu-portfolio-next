import React from "react";

import styled from "styled-components";
import Section from "./Section";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ContentBox = styled.div`
  padding-right: 30px;
`;

const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const P = styled.p``;

const W50 = styled.div`
  min-width: 50%;

  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

function About() {
  return (
    <Section title="About Me" id="about">
      <Content>
        <W50>
          <ContentBox>
            <H3>프론트엔드 주니어 개발자 입니다.</H3>
            <P>프론트엔드 개발자 강성규 입니다.</P>
          </ContentBox>
        </W50>
        <W50>
          <Img src="images/img1.jpg" />
        </W50>
      </Content>
    </Section>
  );
}

export default About;
