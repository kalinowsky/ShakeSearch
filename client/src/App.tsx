import React from "react";
import styled from "styled-components";
import { Search } from "./Search";

const App = () => {
  return (
    <Search
      onSearch={(v) => {
        console.log(v);
      }}
    />
  );
};

export default App;
const PageWrapper = styled.div`
  background-color: #e1ddd7;
`;
