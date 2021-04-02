import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid blue 2px;
  border-radius: 30px;
  width: 6rem;
  height: 3rem;
  background: pink;
`;

export default function Button() {
  return (
    <>
      <StyledButton>Hello!</StyledButton>
    </>
  );
}
