import React from "react";

import styled from "styled-components";

const Container = styled.a`
  position: relative;
  background: #2196f3;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;

  @media (max-width: 991px) {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
`;

type Props = {
  href: string;
  text: string;
};

function LinkButton({ href, text }: Props) {
  return <Container href={href}>{text}</Container>;
}

export default LinkButton;
