import React, { Component } from 'react';
import styled from 'styled-components';

import Input from './components/form'

const Wrapper = styled.div`
  background: #0984e3;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Box = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: -150px;
  margin-right: -150px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <Input />
        </Box>
      </Wrapper>
    );
  }
}

export default App;
