import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/loginPage';

export default function RoutesApps() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} exact />
    </Routes>
  );
}
