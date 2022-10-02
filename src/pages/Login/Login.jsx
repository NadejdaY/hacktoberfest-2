import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "./validationSchema";
import styled from "styled-components";
import {S_Container} from "../../styled/S_Container";
import {Context} from "../../context/Context";
import Loader from "../../components/Loader/Loader";
import {S_FormButton} from "../../styled/S_FormButton";
import {S_FormInput} from "../../styled/S_FormInput";
import {S_Form} from "../../styled/S_Form";
import {S_FormInputError} from "../../styled/S_FormInputError";
import {S_FormLabel} from "../../styled/S_FormLabel";

const S_Wrapper = styled.section`
  margin: 50px 0 0 0;
`;
const S_Title = styled.h1`
  font-size: 23px;
  margin: 0 0 30px 0;
  text-align: center;
`;

function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    login(data);
  };

  // Лоадер отбражается после первого получения, дальше данные берутся из кэша
  return (
    <S_Wrapper>
      <S_Container>
        <S_Title>Sign in</S_Title>
        <S_Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <S_FormLabel>Login</S_FormLabel>
            <S_FormInput {...register("email")} />
            <S_FormInputError>{errors.email?.message}</S_FormInputError>
          </label>
          <label>
            <S_FormLabel>Password</S_FormLabel>
            <S_FormInput type="password" {...register("password")} />
            <S_FormInputError>{errors.password?.message}</S_FormInputError>
          </label>
          <S_FormButton type="submit">
            {loading ? <Loader /> : "Sign in"}
          </S_FormButton>
        </S_Form>
      </S_Container>
    </S_Wrapper>
  );
}

export default Login;
