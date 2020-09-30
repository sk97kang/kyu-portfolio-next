import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      titleSize: string;
    };
    fontWeights: {
      small: number;
      base: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    paddings: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    margins: {
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    interval: {
      base: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    verticalInterval: {
      base: string;
    };
    colors: {
      black: string;
      white: string;
      gray_1: string;
      gray_2: string;
      green_1: string;
      first: string;
      text: string;
    };
    deviceSizes: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
    };
    zIndex: {
      fixed: number;
    };
    height: {
      header: string;
    };
  }
}

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const fontWeights = {
  small: 400,
  base: 500,
  lg: 600,
  xl: 700,
  xxl: 800,
  xxxl: 900,
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const colors = {
  black: "#2a3b47",
  white: "#fafaff",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
  first: "#5361ff",
  text: "#697477",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const zIndex = {
  fixed: 100,
};

const height = {
  header: "3rem",
};

const theme: DefaultTheme = {
  fontSizes,
  fontWeights,
  paddings,
  margins,
  interval,
  verticalInterval,
  colors,
  deviceSizes,
  device,
  zIndex,
  height,
};

export default theme;
