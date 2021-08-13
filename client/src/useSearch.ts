import { useState } from "react";
import { F1, mkFetched, mkFetchError, mkFetching, mkNotFetched } from "./utils";
import { Async } from "./utils";

export const useSearch = (): {
  results: Async<any[]>;
  search: F1<string, Promise<void>>;
} => {
  const [results, setResults] = useState<Async<any[]>>(mkNotFetched());

  const search = async (phrase: string) => {
    setResults(mkFetching());
    try {
      const response = await fetch(`/search/${phrase}`);
      const data = await response.json();
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
