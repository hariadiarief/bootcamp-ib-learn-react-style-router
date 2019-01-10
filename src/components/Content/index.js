import React, { Component } from "react";

import styled from "styled-components";

const mainStyle = {
  color: "red",
  backgroud: "black"
};

const Paragraph = styled.p`
  font-size: 20px;
`;

const Content = () => (
  <main style={mainStyle}>
    <Paragraph>this component made in class 'content'</Paragraph>
  </main>
);

export default Content;
