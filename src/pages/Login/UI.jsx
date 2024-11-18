import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../widgets/Input/index';
import { Button } from '../../widgets/Button/index';
import { useNavigate } from 'react-router-dom';
import { signinUser } from './model';

const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LoginHeader = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    color: #3b82f6;

    span {
      font-weight: bold;
    }
  }
`;

const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginFooter = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;

  span {
    color: #3b82f6;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
`;

const UI = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await signinUser(userId, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <LoginWrapper>
      <LoginContent>
        <LoginHeader>
          <h1>안녕하세요!</h1>
          <p>
            <span>Bstrom</span>에 로그인 해볼까요?
          </p>
        </LoginHeader>

        <LoginInputs>
          <Input
            label="아이디"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            placeholder="아이디를 입력해주세요"
          />
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />
        </LoginInputs>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button
          variant="secondary"
          style={{ cursor: 'pointer' }}
          fullWidth
          onClick={handleLogin}
        >
          로그인
        </Button>

        <LoginFooter>
          아직 함께 하고있지 않다면? <a>회원가입 하기</a>
        </LoginFooter>
      </LoginContent>
    </LoginWrapper>
  );
};

export default UI;
