import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


 :root{
   font-size: 16px;
 }

 #__next{
   overflow-x: hidden;
   position: relative;
   width: 100%;
 }

 body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
 }

html,
    body {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-size: 100%;
    overflow-x: hidden;
    position: relative;
    }

    /* TYPOGRAPHY */

    h1 {
    font-size: 2rem;
    }

    h2 {
    font-size: 1.75rem;
    }

    h3 {
    font-size: 1.375rem;
    }

    h4 {
    font-size: 1.125rem;
    }

    h5 {
    font-size: 1rem;
    }

    h6 {
    font-size: 0.875rem;
    }

    .slick-slide{
      height: auto;
    }
`;
