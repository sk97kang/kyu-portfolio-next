import React, { useCallback, useEffect, useState } from "react";

import styled, { css } from "styled-components";

const Container = styled.header<{ sticky: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;

  ${({ sticky }) => {
    if (sticky) {
      return css`
        background: #fff;
        padding: 15px 100px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      `;
    }
  }}

  @media (max-width: 991px) {
    padding: 15px 50px;
    z-index: 1000;
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const Logo = styled.a<{ sticky: boolean }>`
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 2px;

  ${({ sticky }) => {
    if (sticky) {
      return css`
        color: #111;
      `;
    }
  }}
`;

const Toggle = styled.div<{ sticky: boolean; active: boolean }>`
  ${({ sticky }) => {
    if (sticky) {
      return css`
        filter: invert(1);
      `;
    }
  }}

  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    background: url("images/menu.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
    transition: 0.5s;

    ${({ active }) => {
      if (active) {
        return css`
          background: url("images/close.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: 30px;
          cursor: pointer;
        `;
      }
    }}
  }
`;

const Menu = styled.ul<{ active: boolean }>`
  position: relative;
  display: flex;

  @media (max-width: 991px) {
    position: fixed;
    top: 75px;
    left: -100%;
    display: block;
    padding: 100px 50px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: #fff;
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    ${({ active }) => {
      if (active) {
        return css`
          left: 0;
        `;
      }
    }}
  }
`;

const MenuList = styled.li`
  position: relative;
  list-style: none;
`;

const MenuLink = styled.a<{ sticky: boolean }>`
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;

  ${({ sticky }) => {
    if (sticky) {
      return css`
        color: #111;
      `;
    }
  }}

  @media (max-width: 991px) {
    color: #111;
    font-size: 24px;
    margin: 10px;
  }
`;

function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [setSticky]);

  const toggleMenu = useCallback(() => {
    setMenuActive((prev) => !prev);
  }, [setMenuActive]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container sticky={sticky}>
      <Logo sticky={sticky}>Portfolio</Logo>
      <Toggle sticky={sticky} active={menuActive} onClick={toggleMenu}></Toggle>
      <Menu active={menuActive}>
        <MenuList>
          <MenuLink href="#home" sticky={sticky} onClick={toggleMenu}>
            Home
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink href="#about" sticky={sticky} onClick={toggleMenu}>
            About
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink href="#services" sticky={sticky} onClick={toggleMenu}>
            Services
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink href="#work" sticky={sticky} onClick={toggleMenu}>
            Work
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink href="#testimonial" sticky={sticky} onClick={toggleMenu}>
            Testimonial
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink href="#contact" sticky={sticky} onClick={toggleMenu}>
            Contact
          </MenuLink>
        </MenuList>
      </Menu>
    </Container>
  );
}

export default Header;
