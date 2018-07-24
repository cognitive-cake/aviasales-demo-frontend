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

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(
    151.09deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;

const SearchForm = styled.form``;

class SearchHeader extends Component {
  render() {
    return (
      <Header>
        Привет, я хедер!
        <SearchForm>
          <Button>Я кнопка!</Button>
        </SearchForm>
      </Header>
    );
  }
}

export default SearchHeader;
