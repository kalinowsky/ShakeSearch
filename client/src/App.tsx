import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { Async } from "./utils";

export const App = () => {
  const [data, setData] = React.useState<Async<any>>({ type: "NotFetched" });
  const fetchData = async (v: string) => {
    const res = await window.fetch(`/search/${v}`);
    const decodedResponse = await res.json();
    console.log({ decodedResponse });
    if (decodedResponse) {
      setData({ type: "Fetched", value: decodedResponse });
    }
  };

  console.log({ data });

  return <Search onSearch={fetchData} />;
};
