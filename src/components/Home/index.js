import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

import Page from "../Page";

const mainStyle = {
  color: "red",
  backgroud: "black"
};

const Paragraph = styled.p`
  font-size: 20px;
`;

const Content = () => (
  <Page>
    <main style={mainStyle}>
      <Paragraph>this component made in class 'content'</Paragraph>
      <Button color="primary">Get Srarted</Button>
      <Button color="danger">Danger</Button>
    </main>
  </Page>
);

export default Content;
