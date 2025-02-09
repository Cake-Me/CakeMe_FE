import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/image/google.png';
import KakaoLogo from '../assets/image/kakao.png';
import NaverLogo from '../assets/image/naver.png';
import { login } from '../api/userApi';

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
  display: block; /* 기본값인 block으로 설정 */
  width: 100%;
  max-width: 430px;
  margin: 0 auto 20px; /* 좌우 중앙 정렬 */
  text-align: center; /* 자식 요소의 텍스트 중앙 정렬 */
`;


const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
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
  width: 100%;
  max-width: 350px;
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
  width: 100%;
  max-width: 350px;
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
const SignupButton = styled(SNSButton)`
  background-color: #EDE7E1;
  border: 1px solid #CFB7A0;
  color: #783C03;
`;

const GoogleButton = styled(SNSButton)`
  background-color: #fff;
  border: 1px solid #ccc;
`;

const KakaoButton = styled(SNSButton)`
  background-color: #FFE812;
  border: 1px solid #FFD400;
  color: #000;
`;

const NaverButton = styled(SNSButton)`
  background-color: #03C75A;
  border: 1px solid #03C75A;
  color: #fff;
`;

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    userId: yup
        .string()
        .matches(/^[a-zA-Z0-9_]+$/, '유효한 아이디를 입력해주세요.')
        .required('아이디를 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .required('비밀번호는 필수 입력 사항입니다.'),
  });

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log('전송 데이터:', data); // 요청 데이터 확인용
    try {
      const response = await login(data); // API 요청
      console.log('로그인 성공:', response.data);
  
      // 토큰 저장
      localStorage.setItem('token', response.data.token);
  
      // 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error.response?.data || error.message);
      alert(error.response?.data?.message || '로그인에 실패했습니다.');
    }
  };
  

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Container>
      <Title>CAKE ME !</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Icon>👤</Icon>
          <Input
            type="text"
            placeholder="ID"
            onChange={(e) => setValue('userId', e.target.value)}
            {...register('userId')}
          />
        </InputContainer>
        <p style={{ color: 'red', fontSize: '12px' }}>{errors.userId?.message}</p>
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
      <SignupButton onClick={() => navigate('/signup')}>회원가입 하기</SignupButton>
<GoogleButton>
  <img src={GoogleLogo} alt="Google" />
  구글로 시작하기
</GoogleButton>
<KakaoButton>
  <img src={KakaoLogo} alt="Kakao" />
  카카오톡으로 시작하기
</KakaoButton>
<NaverButton>
  <img src={NaverLogo} alt="Naver" />
  네이버로 시작하기
</NaverButton>
    </Container>
  );
};

export default Login;
