import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Site from "./layout/Site";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

const Layout = ({ children }) => (
    <Site>
        <Helmet
            title="Markus Portfolio"
            meta={[
                {
                    name: "description",
                    content:
                        "Markus Azer's personal wedsite, portfolio, blog, tutorials, and just cool $h!t"
                },
                {
                    name: "keywords",
                    content: "resume, blog, porfolio, tutorials, Markus Azer"
                }
            ]}
            script={[
                { src: "https://use.fontawesome.com/releases/v5.0.13/js/all.js" }
            ]}
            link={[
                {
                    rel: "stylesheet",
                    href:
                        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/fontawesome.min.css"
                }
            ]}
        />
        <Header />
        <Content>
            <Router />
        </Content>
        <Footer />
    </Site>
);

Layout.propTypes = {
    children: PropTypes.func
};

export default Layout;
