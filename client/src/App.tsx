import React from "react";
import styled from "styled-components";

function App() {
  return <TestWrapper>Styled components test</TestWrapper>;
}

export default App;

const TestWrapper = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;
