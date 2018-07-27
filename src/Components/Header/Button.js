import styled from "styled-components";

export default styled.button`
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
