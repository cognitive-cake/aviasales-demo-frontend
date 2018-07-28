import React, { Component } from "react";
import styled from "styled-components";

import SearchField from "./SearchField";
import Button from "./Button";
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

const SearchWrapper = styled.div`
  margin-bottom: 48px;
`;

const NoGuttersDiv = styled.div`
  margin-left: -8px;
  margin-right: -8px;
`;

const FromFieldWrapper = styled.div`
  margin-right: 2px;
`;
const From = styled(SearchField)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  padding-right: 83px;
`;

const ToFieldWrapper = styled.div`
  margin-right: 2px;
`;
const To = styled(SearchField)``;

const DepartureThitherFieldWrapper = styled.div`
  margin-right: 2px;
`;
const DepartureThither = styled(SearchField)``;

const DepartureBackFieldWrapper = styled.div`
  margin-right: 2px;
`;
const DepartureBack = styled(SearchField)``;

const NumberOfSeatsFieldWrapper = styled.div`
  margin-right: 2px;
`;
const NumberOfSeats = styled(SearchField)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const PlaneSvg = styled.img`
  margin-left: 24px;
  vertical-align: middle;
`;

class SearchForm extends Component {
  render() {
    return (
      <form action="#" method="get" id="searchForm" className="container">
        <MainHeader>Поиск дешевых авиабилетов</MainHeader>
        <SecondHeader>Лучший способ купить авиабилеты дешево</SecondHeader>
        <SearchWrapper>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-xl">
              <NoGuttersDiv>
                <FromFieldWrapper>
                  <From defaultValue="Москва" />
                </FromFieldWrapper>
              </NoGuttersDiv>
            </div>
            <div className="col-xs-12 col-sm-6 col-xl">
              <NoGuttersDiv>
                <ToFieldWrapper>
                  <To placeholder="Город прибытия" />
                </ToFieldWrapper>
              </NoGuttersDiv>
            </div>
            <div className="col-xs-6 col-sm-3 col-xl">
              <NoGuttersDiv>
                <DepartureThitherFieldWrapper>
                  <DepartureThither placeholder="Туда" />
                </DepartureThitherFieldWrapper>
              </NoGuttersDiv>
            </div>
            <div className="col-xs-6 col-sm-3 col-xl">
              <NoGuttersDiv>
                <DepartureBackFieldWrapper>
                  <DepartureBack placeholder="Обратно" />
                </DepartureBackFieldWrapper>
              </NoGuttersDiv>
            </div>
            <div className="col-xs-12 col-sm-6 col-xl">
              <NoGuttersDiv>
                <NumberOfSeatsFieldWrapper>
                  <NumberOfSeats defaultValue="1 пассажир, эконом" />
                </NumberOfSeatsFieldWrapper>
              </NoGuttersDiv>
            </div>
          </div>
        </SearchWrapper>
        <Button>
          Найти билеты<PlaneSvg src={planeImg} alt="plane" />
        </Button>
      </form>
    );
  }
}

export default SearchForm;
