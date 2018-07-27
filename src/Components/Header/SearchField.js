// import React, { Component } from "react";
import styled from "styled-components";

export default styled.input.attrs({
  placeholder: props => props.placeholder,
  defaultValue: props => props.defaultValue
})`
  box-sizing: border-box;
  border-width: 0;
  margin-bottom: 2px;
  padding: 18px 16px;
  width: 100%;

  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;

  &:hover {
    cursor: pointer;
  }
`;
