import { FC } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  return children;
};

export default ProtectedRoute;
