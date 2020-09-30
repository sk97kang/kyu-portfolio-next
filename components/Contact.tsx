import React from "react";
import Section from "./Section";

import styled from "styled-components";
import { FaMapMarkedAlt, FaPhoneAlt, FaAddressBook } from "react-icons/fa";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  min-width: 40%;

  @media (max-width: 991px) {
    margin: 20px 0;
  }
`;

const ContactInfoBox = styled.div`
  position: relative;
`;

const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`;

const Icon = styled.div`
  min-width: 40px;
  padding-top: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
`;

const Text = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;

  & h3 {
    font-weight: 500;
    color: #2196f3;
    margin-bottom: 0;
  }
`;

const FormBox = styled.div`
  min-width: 60%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
  background: transparent;
  border: none;
  outline: none;
  background: #222;
  color: #fff;
  resize: none;

  &::placeholder {
    color: #999;
  }

  &[type="submit"] {
    max-width: 100px;
    background: #2196f3;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
  background: transparent;
  border: none;
  outline: none;
  background: #222;
  color: #fff;
  resize: none;
  min-height: 200px;

  &::placeholder {
    color: #999;
  }
`;

const H3 = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

function Contact() {
  return (
    <Section title="Contact" id="contact" color="dark">
      <Content>
        <ContactInfo>
          <H3>Contacnt Info</H3>
          <ContactInfoBox>
            <Box>
              <Icon>
                <FaMapMarkedAlt />
              </Icon>
              <Text>
                <H3>Adress</H3>
                <p>서울시 구로구</p>
              </Text>
            </Box>
            <Box>
              <Icon>
                <FaPhoneAlt />
              </Icon>
              <Text>
                <H3>Phone</H3>
                <p>010-2173-8130</p>
              </Text>
            </Box>
            <Box>
              <Icon>
                <FaAddressBook />
                <i className="fa fa-envelope"></i>
              </Icon>
              <Text>
                <H3>Email</H3>
                <p>sk97.kang@gmail.com</p>
              </Text>
            </Box>
          </ContactInfoBox>
        </ContactInfo>
        <FormBox>
          <Form>
            <H3>Message Me</H3>
            <Input type="text" name="" placeholder="Full Name" />
            <Input type="email" name="" placeholder="Email" />
            <Textarea placeholder="Your Message"></Textarea>
            <Input type="submit" value="Send" />
          </Form>
        </FormBox>
      </Content>
    </Section>
  );
}

export default Contact;
