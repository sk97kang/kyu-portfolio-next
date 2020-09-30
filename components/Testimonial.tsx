import React from "react";
import Section from "./Section";

import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const TestimonialBox = styled.div`
  max-width: calc(50% - 40px);
  padding: 60px 40px;
  margin: 20px;
  background: #2196f3;

  @media (max-width: 991px) {
    max-width: calc(100% - 40px);
    padding: 40px 20px;
    margin: 10px;
    background: #2196f3;
  }
`;

const P = styled.p`
  color: #fff;
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
`;

const H3 = styled.h3`
  margin-top: 40px;
  text-align: end;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 1em;

  & span {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

function Testimonial() {
  return (
    <Section title="Testimonial" id="testimonial" color="lightgray">
      <Content>
        <TestimonialBox>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
          <H3>
            Someone Famous
            <br />
            <span>Creative Designer</span>
          </H3>
        </TestimonialBox>
        <TestimonialBox>
          <P>
            유튜브의 자막 기능 중 '자동 생성'의 경우 동영상의 음성을 인식하여
            자막으로 변환하는 기능인데 여전히 영어 이외의 언어, 특히 한국어 인식
          </P>
          <H3>
            Someone Famous
            <br />
            <span>Creative Designer</span>
          </H3>
        </TestimonialBox>
      </Content>
    </Section>
  );
}

export default Testimonial;
