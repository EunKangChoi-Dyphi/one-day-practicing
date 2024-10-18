import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import LoadingScreen from './components/commons/loading-screen';
import ProtectedRoute from './components/commons/protected-route';
import Layout from './components/commons/layout';
import Home from './routes/home';
import CreateAccount from './routes/create-account';
import Login from './routes/login';
import ResetPassword from './routes/reset-password';
import Profile from './routes/profile';

// styled components
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const GlobalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box
}
body {
  background-color: #f0f0f0;
  color: #88C273;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
]);

function App() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
