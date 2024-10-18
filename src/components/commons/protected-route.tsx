import { Navigate } from 'react-router-dom';
import { FIREBASE_AUTH } from '../../firebase';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = FIREBASE_AUTH.currentUser;
  if (user === null) {
    // 로그인되어있지 않으면 로그인 페이지로 이동
    return <Navigate to="/login" />;
  }
  return children;
}
