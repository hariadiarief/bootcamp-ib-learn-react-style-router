import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

import Page from "../Page";

const Paragraph = styled.p`
  font-size: 20px;
`;

const Content = () => (
  <Page>
    <Paragraph>this component made in class 'content'</Paragraph>
    <Button color="primary">Get Srarted</Button>
    <Button color="danger">Danger</Button>
  </Page>
);

export default Content;
