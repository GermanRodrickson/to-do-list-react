import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.form`
`

const InputText = styled.input`
  box-shadow: none;
  border: 1px solid black;
  flex: 1;
  width: 65%;
  margin-left: 5px;
  padding: 5px;
`;

const Button = styled.input`
  width: 25%;
  background-color: #f4f4f4;
  margin-right: 5px;
  padding: 5px;
`;



class Input extends Component {
  render() {
    function updateInput (event) {
      
    }

    const addlist = function (event) {
      event.preventDefault();
      
      console.log(event);
    }

    return <Wrapper>
        <InputText type="text" onChange={updateInput}/>
      <Button type="submit" value="Add" onClick={addlist}/>
      </Wrapper>;
  }
}

export default Input;
