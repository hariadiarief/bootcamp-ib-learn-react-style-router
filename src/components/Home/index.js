import React from "react";

import styled from "styled-components";

import { Button } from "reactstrap";

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
    <Button color="primary">Get Srarted</Button>
    <Button color="danger">Danger</Button>
  </main>
);

export default Content;
