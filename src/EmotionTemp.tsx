/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const divStyles = css`
  background-color: #ddd;
  padding: 1em;
  border-radius: 5px;
  &:hover {
    background-color: #ccc;
  }
`;

const Button = styled.button`
  background-color: #2aa88a;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: #2a9b8a;
  }
`;

const Button2 = styled("button")`
  color: red;
  padding: 1em;
  font-weight: bold;
`;

export function Temp() {
  return (
    <div>
      <div css={divStyles}>styles component</div>
      <Button onClick={() => alert("clicked")}>click me</Button>
      <Button2>button 2</Button2>
    </div>
  );
}
