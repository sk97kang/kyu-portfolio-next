import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Banner />
    <About />
    <Services />
    <Work />
    <Testimonial />
    <Contact />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
