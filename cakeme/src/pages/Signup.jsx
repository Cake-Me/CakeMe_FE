import { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/userApi';

const Signuppage = () => {
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required('사용자 이름을을 입력해주세요.'),
    userId: yup
    .string()
    .matches(/^[a-zA-Z0-9_]+$/, '유효한 아이디를 입력해주세요.')
    .required('아이디를 입력해주세요.'),
    password: yup
      .string()
      .min(5, '비밀번호는 5자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required('비밀번호를 입력해주세요.'),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 다시한번 입력해주세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
      navigate('/login');
    } catch (err) {
      setApiError(err.message);
    }
  };*/

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await signup(data);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error.response?.data || error.message);
      setApiError(error.response?.data?.message || '회원가입 실패');
    }
  };

  return (
    <Wrapper>
      <LeftSection>
        <Title>CAKE ME</Title>
        <Subtitle>원하는 케이크를 쉽게</Subtitle>
        <Subtitle style={{marginRight: '20%'}}>디자인 해보세요!</Subtitle>
        <Circle>로고</Circle>
      </LeftSection>
      <RightSection>
        <h1 style={{fontSize:'50px', color: '#7E5731'}}>Sign Up</h1>
        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder="Username"
            {...register('username')}
          />
          <p style={{ color: 'red', fontSize: '12px' }}>{errors.username?.message}</p>
          <StyledInput type="text" placeholder="userId" {...register('userId')} />
          <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.userId?.message}</p>
          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <p style={{ color: 'red', fontSize: '12px' , marginBottom: '10px'}}>{errors.password?.message}</p>
          <StyledInput
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          <p style={{ color: 'red', fontSize: '12px' , marginBottom: '10px'}}>
            {errors.confirmPassword?.message}
          </p>
          <SubmitButton type="submit">회원가입</SubmitButton>
        </Form>
      </RightSection>
    </Wrapper>
  );
};

export default Signuppage;


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #f7f3ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #7E5731;
  font-size: 90px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #7E5731;
  font-size: 30px;
  margin: 5px;
  margin-right: 12%;
`;

const Circle = styled.div`
  margin-top: 3%;
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #7E5731;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #783C03;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #783C03; /* 플레이스홀더 색상 */
    opacity: 0.7; /* 플레이스홀더 투명도 */
  }
`;

const SubmitButton = styled.button`
  width: 107%;
  padding: 10px;
  background-color: #6b4e3d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: gray;
  }
`;
