import React, { Component } from "react";
import styled from "styled-components";

import Brand from "./Brand";

const Header = styled.header`
  position: relative;

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

const FormMainHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;

  color: #ffffff;
`;

const FormSecondHeader = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
`;

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
      <Header>
        <Brand />
        <SearchForm action="#" method="get" id="searchForm">
          <FormMainHeader>Поиск дешевых авиабилетов</FormMainHeader>
          <FormSecondHeader>
            Лучший способ купить авиабилеты дешево
          </FormSecondHeader>
          <Button>Я кнопка!</Button>
        </SearchForm>
      </Header>
    );
  }
}

export default SearchHeader;
