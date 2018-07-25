import React, { Component } from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 139px;
  height: 29px;
  left: 140px;
  top: 14px;

  vertical-align: middle;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;

  color: #ffffff;
`;

const Logotype = styled.img`
  vertical-align: middle;

  margin-right: 12px;
`;

class Brand extends Component {
  render() {
    return (
      <Wrapper>
        <Logotype src={logo} alt="Logotype" />
        <Title>aviasales</Title>
      </Wrapper>
    );
  }
}

export default Brand;
