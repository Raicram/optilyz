import React from 'react';
import styled from 'styled-components'
import MainTemplate from 'src/components/mainTemplate'

const Wrapper = styled.div` 
  width: 100%;
  background-color: #99bbad;
  margin: 0;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Wrapper>
      <MainTemplate />
    </Wrapper>
  );
}

export default App;
