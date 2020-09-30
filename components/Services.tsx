import React from "react";
import Section from "./Section";

import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ServicesBox = styled.div`
  padding: 40px 20px;
  background: #222;
  color: #fff;
  max-width: 340px;
  margin: 20px;
  text-align: center;
  transition: 0.5s;

  &:hover {
    background: #2196f3;
  }

  @media (max-width: 991px) {
    margin: 10px;
  }
`;

const Img = styled.img`
  max-width: 80px;
  filter: invert(1);
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const P = styled.p``;

function Services() {
  return (
    <Section title="Services" id="services" color="dark">
      <Content>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
        <ServicesBox>
          <Img src="images/icon1.png" />
          <H2>Web Design</H2>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
        </ServicesBox>
      </Content>
    </Section>
  );
}

export default Services;
