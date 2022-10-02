import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { S_Container } from "../../styled/S_Container";
import { schema } from "./validationSchema";
import { Context } from "../../context/Context";
import { useContext } from "react";
import Loader from "../../components/Loader/Loader";
import { S_FormButton } from "../../styled/S_FormButton";
import { S_FormInput } from "../../styled/S_FormInput";
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

function Registration() {
  const [loading, setLoading] = useState(false);
  const { register: registerAccount } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ email, password, firstName, lastName }) => {
    setLoading(true);
    const reformattedData = {
      email,
      password,
      firstName,
      lastName,
    };
    registerAccount(reformattedData);
  };

  return (
    <S_Wrapper>
      <S_Container>
        <S_Title>Registration</S_Title>
        <S_Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <S_FormLabel>Email</S_FormLabel>
            <S_FormInput {...register("email")} />
            <S_FormInputError>{errors.email?.message}</S_FormInputError>
          </label>
          <label>
            <S_FormLabel>First name</S_FormLabel>
            <S_FormInput {...register("firstName")} />
            <S_FormInputError>{errors.firstName?.message}</S_FormInputError>
          </label>
          <label>
            <S_FormLabel>Last name</S_FormLabel>
            <S_FormInput {...register("lastName")} />
            <S_FormInputError>{errors.lastName?.message}</S_FormInputError>
          </label>
          <label>
            <S_FormLabel>Password</S_FormLabel>
            <S_FormInput type="password" {...register("password")} />
            <S_FormInputError>{errors.password?.message}</S_FormInputError>
          </label>
          <label>
            <S_FormLabel>Password confirmation</S_FormLabel>
            <S_FormInput
              type="password"
              {...register("passwordConfirmation")}
            />
            <S_FormInputError>{errors.passwordConfirmation?.message}</S_FormInputError>
          </label>
          <S_FormButton type="submit">
            {loading ? <Loader /> : "Register"}
          </S_FormButton>
        </S_Form>
      </S_Container>
    </S_Wrapper>
  );
}

export default Registration;
