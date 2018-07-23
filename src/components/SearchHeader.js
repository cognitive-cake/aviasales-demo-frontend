import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

class SearchHeader extends Component {
  render() {
    return (
      <header>
        Привет, я хедер!
        <Button>Я кнопка!</Button>
      </header>
    );
  }
}

export default SearchHeader;
