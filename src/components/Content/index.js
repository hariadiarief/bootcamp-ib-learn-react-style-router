import React, { Component } from "react";

import styled from "styled-components";

const Main = styled.main`
  background-color: #ecf0f1;
  margin: 0;
  max-width: 850px;
  p {
    margin: 0;
  }
`;

class Content extends Component {
  render() {
    return (
      <Main>
        <p>this component made in class 'content'</p>
      </Main>
    );
  }
}

export default Content;
