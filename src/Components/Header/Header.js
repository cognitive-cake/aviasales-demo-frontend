import React, { Component } from "react";
import styled from "styled-components";

import MediaSizes from "../MediaSizes";
import Brand from "./Brand";
import SearchForm from "./SearchForm";

const SearchHeader = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: top;
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

  @media (min-width: ${MediaSizes.xs}) {
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  margin-top: 88px;

  @media (min-width: ${MediaSizes.xs}) {
    margin-top: 0;
  }
`;

class Header extends Component {
  render() {
    return (
      <SearchHeader>
        <div className="container">
          <Brand />
          <FormWrapper>
            <SearchForm />
          </FormWrapper>
        </div>
      </SearchHeader>
    );
  }
}

export default Header;
