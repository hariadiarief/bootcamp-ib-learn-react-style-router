import React, { Component } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const NavigationBar = styled.header`
  height: 5em;
  font-size: 1.5em;
  background-color: #3f3f3f;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
  font-size: 1.5em;
`;

const NavigationLink = styled.ul`
  color: #fff;

  li {
    display: inline-block;
    margin-right: 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <NavigationBar>
        <Title>Adi Apps</Title>
        <NavigationLink>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Todo</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </NavigationLink>
      </NavigationBar>
    );
  }
}

export default Header;
