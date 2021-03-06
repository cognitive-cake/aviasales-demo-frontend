import React, { Component } from "react";
import styled from "styled-components";

import MediaSizes from "../MediaSizes";
import SearchField from "./SearchField";
import Button from "./Button";
import planeImg from "../../plane.svg";

const MainHeader = styled.h1`
  margin: 0;
  margin-bottom: 16px;

  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;

  @media (min-width: ${MediaSizes.xs}) {
    line-height: 48px;
    font-size: 32px;
  }

  @media (min-width: ${MediaSizes.xl}) {
    font-weight: bold;
    line-height: 48px;
    font-size: 40px;
  }
`;

const SecondHeader = styled.h2`
  margin: 0;
  margin-bottom: 40px;

  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;

  @media (min-width: ${MediaSizes.xl}) {
    font-size: 24px;
  }
`;

const SearchWrapper = styled.div`
  margin-bottom: 16px;

  @media (min-width: ${MediaSizes.xs}) {
    margin-bottom: 32px;
  }

  @media (min-width: ${MediaSizes.xl}) {
    margin-bottom: 48px;
  }
`;

const NoGuttersDiv = styled.div`
  margin-left: -8px;
  margin-right: -8px;
`;

const FromFieldWrapper = styled.div`
  @media (min-width: ${MediaSizes.xs}) {
    margin-right: 2px;
  }
`;
const From = styled(SearchField)`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  padding-right: 83px;

  @media (min-width: ${MediaSizes.xs}) {
    border-top-right-radius: 0;
  }

  @media (min-width: ${MediaSizes.xl}) {
    border-bottom-left-radius: 4px;
  }
`;

const ToFieldWrapper = styled.div`
  @media (min-width: ${MediaSizes.xl}) {
    margin-right: 2px;
  }
`;
const To = styled(SearchField)`
  @media (min-width: ${MediaSizes.xs}) {
    border-top-right-radius: 4px;
  }

  @media (min-width: ${MediaSizes.xl}) {
    border-top-right-radius: 0;
  }
`;

const DepartureThitherFieldWrapper = styled.div`
  margin-right: 2px;
`;
const DepartureThither = styled(SearchField)`
  @media (min-width: ${MediaSizes.xs}) {
    border-bottom-left-radius: 4px;
  }

  @media (min-width: ${MediaSizes.xl}) {
    border-bottom-left-radius 0;
  }
`;

const DepartureBackFieldWrapper = styled.div`
  @media (min-width: ${MediaSizes.xs}) {
    margin-right: 2px;
  }
`;
const DepartureBack = styled(SearchField)``;

const NumberOfSeatsFieldWrapper = styled.div``;
const NumberOfSeats = styled(SearchField)`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @media (min-width: ${MediaSizes.xs}) {
    border-bottom-left-radius: 0;
  }

  @media (min-width: ${MediaSizes.xl}) {
    border-top-right-radius: 4px;
  }
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
        <div className="hidden-xs">
          <SecondHeader>Лучший способ купить авиабилеты дешево</SecondHeader>
        </div>

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
