import { FC } from 'react';
import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
