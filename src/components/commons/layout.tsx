import { Link, useNavigate } from 'react-router-dom';
import { FIREBASE_AUTH } from '../../firebase';
import styled from 'styled-components';

// 컴포넌트
const Wrapper = styled.div``;
const Menu = styled.div``;
const MenuItem = styled.div``;

export default function Layout() {
  const navigate = useNavigate();

  // 로그아웃 함수 실행
  const onLogOut = async () => {
    const ok = confirm('로그아웃 하시겠습니까?');
    if (ok) {
      await FIREBASE_AUTH.signOut();
      navigate('/login');
    }
  };

  // UI 컴포넌트
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>

        <Link to="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>

        <MenuItem onClick={onLogOut} className="log-out"></MenuItem>
      </Menu>
    </Wrapper>
  );
}
