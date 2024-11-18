import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../widgets/input/Index';
import { Button } from '../../widgets/button/Index';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from './Model';
import { Colors } from '../../shared/ui/Colors';

const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: ${Colors.WHITE};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    color: ${Colors.MAIN_COLOR};

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
  color: ${Colors.G_2};

  span {
    color: ${Colors.MAIN_COLOR};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
`;

const UI = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isButtonEnabled = phoneNumber.length >= 8 && password.length >= 8;

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
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
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
          style={{
            cursor: isButtonEnabled ? 'pointer' : 'not-allowed',
            backgroundColor: isButtonEnabled ? Colors.MAIN_COLOR : Colors.G_3,
            color: isButtonEnabled ? Colors.WHITE : Colors.G_2,
          }}
          fullWidth
          onClick={
            isButtonEnabled
              ? () => handleLogin(phoneNumber, password, setError, navigate)
              : null
          }
        >
          로그인
        </Button>

        <LoginFooter>
          아직 함께 하고있지 않다면?{' '}
          <a
            onClick={() => navigate('/signup')}
            style={{ cursor: 'pointer', color: Colors.G_1 }}
          >
            회원가입 하기
          </a>
        </LoginFooter>
      </LoginContent>
    </LoginWrapper>
  );
};

export default UI;
