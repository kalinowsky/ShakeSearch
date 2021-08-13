import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { useSearch } from "./useSearch";

export const App = () => {
  const { results, search } = useSearch();

  console.log({ results });

  return <Search onSearch={search} />;
};
