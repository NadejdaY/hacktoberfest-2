import React, { useContext } from "react";
import { S_Container } from "../styled/S_Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const S_Wrapper = styled.section`
  padding: 15px;
  background: #006979;
`;
const S_Logo = styled(Link)`
  cursor: pointer;
  padding: 10px;
  color: #fff;
  font-size: 21px;
`;
const S_Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const S_Link = styled(Link)`
  padding: 7px 20px;
  border-radius: 5px;
  margin-left: 40px;
  background: #ff765c;
  border: 2px solid #fff;
`;
const S_Button = styled.button`
  padding: 7px 20px;
  border-radius: 5px;
  margin-left: 40px;
  border: 2px solid #fff;
  background: #ff765c;
`;
function Navbar() {
  const { authStatus, logout } = useContext(Context);
  const navigate = useNavigate();
  return (
    <S_Wrapper>
      <S_Container>
        <S_Inner>
          <S_Logo to="/">Login app</S_Logo>
          <div>
            <S_Link to={authStatus ? "/me" : "/registration"}>
              {authStatus ? "Profile" : "Sign up"}
            </S_Link>
            <S_Button
              onClick={authStatus ? () => logout() : () => navigate("/login")}
            >
              {authStatus ? "Log out" : "Sign in"}
            </S_Button>
          </div>
        </S_Inner>
      </S_Container>
    </S_Wrapper>
  );
}

export default Navbar;
