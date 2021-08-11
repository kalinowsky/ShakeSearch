import React from "react";
import styled from "styled-components";
import { F1 } from "./utils";

const valdiateMinLength = (v: string) => v.length >= 3;

export const Search: React.FC<{ onSearch: F1<string> }> = (p) => {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (valdiateMinLength(searchPhrase)) p.onSearch(searchPhrase);
      }}
    >
      <Input
        type="text"
        placeholder="Put search text here..."
        minLength={3}
        onChange={(v) => setSearchPhrase(v.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

const Form = styled.form`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #8a8070;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #e1ddd7;
  outline: none;
  &::placeholder {
    color: #c0b5a4;
  }
`;

const Button = styled.button`
  margin: 16px;
  width: 100px;
  height: 32px;
  border-radius: 4px;
  border: 2px solid #8a8070;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1ddd7;
  color: #555;
  cursor: pointer;
`;
