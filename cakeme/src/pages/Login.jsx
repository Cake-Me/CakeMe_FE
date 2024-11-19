import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 70px;
  color: #783C03;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 중앙 정렬 */

`;

const InputContainer = styled.div`
  position: relative;
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px;
  font-size: 16px;
  border: 1px solid #c7a89f;
  border-radius: 5px;
  background-color: #fff;
  outline: none;

  &::placeholder {
    color: #c7a89f;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #c7a89f;
  font-size: 20px;
`;

const LoginButton = styled.button`
  width: 350px;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #CFB7A0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #a78b7a;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #a7a7a7;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일은 필수 입력 사항입니다.'),
    password: yup
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .required('비밀번호는 필수 입력 사항입니다.'),
  });

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Container>
      <Title>CAKE ME !</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Icon>👤</Icon>
          <Input
            type="email"
            placeholder="ID"
            onChange={(e) => setValue('email', e.target.value)}
            {...register('email')}
          />
        </InputContainer>
        <p style={{ color: 'red', fontSize: '12px' }}>{errors.email?.message}</p>
        <InputContainer>
          <Icon>🔒</Icon>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setValue('password', e.target.value)}
            {...register('password')}
          />
        </InputContainer>
        <p style={{ color: 'red', fontSize: '12px' }}>{errors.password?.message}</p>
        <LoginButton type="submit" disabled={isDisabled}>
          LOGIN
        </LoginButton>
      </Form>
    </Container>
  );
};

export default Login;
