import { useState } from "react";
import { F1, mkFetched, mkFetchError, mkFetching, mkNotFetched } from "./utils";
import { Async, F0 } from "./utils";

const URL =
  "https://d3p0y7b1b87cj.cloudfront.net/production-plentific-static/api-cache/find-a-pro/api/v1/categories/all.json";

export const useSearch = (): {
  results: Async<any[]>;
  search: F1<string, Promise<void>>;
} => {
  const [results, setResults] = useState<Async<any[]>>(mkNotFetched());

  const search = async () => {
    setResults(mkFetching());
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log({ data });
      setResults(mkFetched(data));
    } catch (err) {
      setResults(mkFetchError(err));
    }
  };

  return {
    results,
    search,
  };
};
