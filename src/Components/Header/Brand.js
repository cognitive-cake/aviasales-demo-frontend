import React, { Component } from "react";
import styled from "styled-components";

import logo from "../../logo.svg";

const Wrapper = styled.div`
  position: absolute;
  top: 14px;

  vertical-align: middle;
`;

const Title = styled.span`
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
        <span className="hidden-xs">
          <Title>aviasales</Title>
        </span>
      </Wrapper>
    );
  }
}

export default Brand;
