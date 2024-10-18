import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Title } from '../components/auth/auth-components';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <Wrapper>
      <Title>Sign In</Title>
    </Wrapper>
  );
}
