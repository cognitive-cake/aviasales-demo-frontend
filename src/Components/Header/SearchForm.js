import React, { Component } from "react";
import styled from "styled-components";

import SearchField from "./SearchField";
import planeImg from "../../plane.svg";

const MainHeader = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;

  color: #ffffff;
`;

const SecondHeader = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
`;

const FieldsWrapper = styled.div``;

const From = styled(SearchField)`
  position: relative;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 2px;
  padding-right: 83px;
`;

const To = styled(SearchField)`
  margin-right: 2px;
`;

const DepartureThither = styled(SearchField)`
  margin-right: 2px;
`;

const DepartureBack = styled(SearchField)`
  margin-right: 2px;
`;

const NumberOfSeats = styled(SearchField)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Button = styled.button`
  background: #ff9241;
  border-radius: 4px;
  border-width: 0;

  padding: 15px 25px 15px 45px;

  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #ff9241de;
    cursor: pointer;
  }

  &:active {
    padding-top: 16px;
    padding-bottom: 14px;
    box-shadow: inset 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const PlaneSvg = styled.img`
  margin-left: 24px;
  vertical-align: middle;
`;

class SearchForm extends Component {
  render() {
    return (
      <form action="#" method="get" id="searchForm">
        <MainHeader>Поиск дешевых авиабилетов</MainHeader>
        <SecondHeader>Лучший способ купить авиабилеты дешево</SecondHeader>
        <FieldsWrapper>
          <From defaultValue="Москва" />
          <To placeholder="Город прибытия" />
          <DepartureThither placeholder="Туда" />
          <DepartureBack placeholder="Обратно" />
          <NumberOfSeats defaultValue="1 пассажир, эконом" />
        </FieldsWrapper>
        <Button>
          Найти билеты<PlaneSvg src={planeImg} alt="plane" />
        </Button>
      </form>
    );
  }
}

export default SearchForm;
