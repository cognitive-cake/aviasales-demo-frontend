import React, { Component } from "react";
import styled from "styled-components";

const FieldWrapper = styled.div`
  display: inline-block;
`;

const InputField = styled.input`
  border-width: 0;
  margin-bottom: 2px;
  padding: 18px 16px;

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

class SearchField extends Component {
  render() {
    return (
      <FieldWrapper>
        <InputField
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
        />
      </FieldWrapper>
    );
  }
}

export default SearchField;
