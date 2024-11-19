import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/image/google.png';
import KakaoLogo from '../assets/image/kakao.png';
import NaverLogo from '../assets/image/naver.png';

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
  justify-content: center;
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

const Divider = styled.div`
  margin: 20px 0;
  width: 350px;
  text-align: center;
  border-bottom: 1px solid #c7a89f;
  line-height: 0.1em;

  span {
    background: #fff;
    padding: 0 10px;
    color: #c7a89f;
    font-size: 14px;
  }
`;

const SNSButton = styled.button`
  width: 350px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${(props) => props.textColor || '#000'};
  background-color: ${(props) => props.bgColor || '#fff'};
  border: 1px solid ${(props) => props.borderColor || '#ccc'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Login = () => {
  const navigate = useNavigate();

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
      <Divider>
        <span>SNS 계정으로 간편 가입하기</span>
      </Divider>
      <SNSButton
        bgColor="#EDE7E1"
        borderColor="#CFB7A0"
        textColor="#783C03"
        onClick={() => navigate('/signup')} // 회원가입 버튼 클릭 시 /signup으로 이동
      >
        회원가입 하기
      </SNSButton>
      <SNSButton bgColor="#fff" borderColor="#ccc">
  <img src={GoogleLogo} alt="Google" />
  구글로 시작하기
</SNSButton>
      <SNSButton bgColor="#FFE812" borderColor="#FFD400" textColor="#000">
      <img src={KakaoLogo} alt="Kakao" />
        카카오톡으로 시작하기
      </SNSButton>
      <SNSButton bgColor="#03C75A" borderColor="#03C75A" textColor="#fff">
      <img src={NaverLogo} alt="Naver" />
        네이버로 시작하기
      </SNSButton>
    </Container>
  );
};

export default Login;
