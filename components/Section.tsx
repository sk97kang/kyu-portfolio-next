import React, { ReactNode } from "react";

import styled, { css } from "styled-components";

const Container = styled.section<{ color: string }>`
  ${({ color }) => {
    if (color === "default") {
      return css``;
    } else if (color === "dark") {
      return css`
        background: #111;
      `;
    } else if (color === "lightgray") {
      return css`
        background: #f7f7f7;
      `;
    }
  }}
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 600;

  ${({ color }) => {
    if (color === "default") {
      return css``;
    } else if (color === "dark") {
      return css`
        color: #fff;
      `;
    }
  }}

  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

type Props = {
  title: string;
  id: string;
  children: ReactNode;
  color?: string;
};

function Section({ id, title, children, color = "default" }: Props) {
  return (
    <Container id={id} color={color}>
      <Heading>
        <H2 color={color}>{title}</H2>
      </Heading>
      {children}
    </Container>
  );
}

export default Section;
