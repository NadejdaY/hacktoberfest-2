import React from "react";
import { S_Container } from "../../styled/S_Container";
import styled from "styled-components";

const S_Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const S_Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
`

function Main() {
  return (
    <>
      <S_Container>
        <S_Title>Main page</S_Title>
        <S_Subtitle>
          React application in which you can register an account, log in to your
          account, change user data
        </S_Subtitle>
      </S_Container>
    </>
  );
}

export default Main;
