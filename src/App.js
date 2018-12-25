import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f4f4f4;
  width: 100%;
  height: 100vh;
  position: relative;
`
const Box = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: -150px;
  margin-right: -150px;
  background: #ffffff;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Box>
          Hello
        </Box>
      </Wrapper>
    );
  }
}

export default App;
