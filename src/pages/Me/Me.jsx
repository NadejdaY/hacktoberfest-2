import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";
import styled from "styled-components";
import { S_Container } from "../../styled/S_Container";
import Loader from "../../components/Loader/Loader";
import { S_FormButton } from "../../styled/S_FormButton";
import { S_Form } from "../../styled/S_Form";
import { S_FormInput } from "../../styled/S_FormInput";
import { S_FormInputError } from "../../styled/S_FormInputError";
import { S_FormLabel } from "../../styled/S_FormLabel";
import { Context } from "../../context/Context";

const S_Wrapper = styled.section`
  margin: 50px 0 0 0;
`;
const S_Title = styled.h1`
  font-size: 23px;
  margin: 0 0 30px 0;
  text-align: center;
`;
const S_ModalWindow = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #ff765c;
  margin: 30px auto 0 auto;
  width: 200px;
  box-shadow: 0px 10px 59px -13px rgba(34, 60, 80, 0.6);
`;
const S_ModalText = styled.p`
  text-align: center;
`;

function Me() {
  let [loading, setLoading] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const { userInfo, getUserData, patchUserData } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const showModalWindow = () => {
    setModalWindow(true);
    setTimeout(() => {
      setModalWindow(false);
    }, 3000);
  };
  const onSubmit = async (newUserData) => {
    await patchUserData(newUserData);
    showModalWindow();
  };
  useEffect(() => {
    (async function () {
      setLoading(true);
      await getUserData();
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    reset({
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    });
  }, [userInfo]);

  return (
    <S_Wrapper>
      <S_Container>
        <S_Title>Change user data</S_Title>
        {loading && <Loader/>}
        <>
          <S_Form onSubmit={handleSubmit(onSubmit)}>
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
            <S_FormButton type="submit">
              {loading ? <Loader /> : "Confirm"}
            </S_FormButton>
          </S_Form>
          {modalWindow && (
            <S_ModalWindow>
              <S_ModalText>User data changed</S_ModalText>
            </S_ModalWindow>
          )}
        </>
      </S_Container>
    </S_Wrapper>
  );
}
export default Me;
