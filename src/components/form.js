import React, { Component } from "react";
import styled from "styled-components";

const InputText = styled.input`
  box-shadow: none;
  border: 1px solid black;
  width: 99%;
`;

class Input extends Component {
  render() {
    return (
      <InputText type="text" />
    );
  }
}

export default Input;
