import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/loginPage';
import BranchPage from '../pages/branch';
import HomePage from '../pages/home';

export default function RoutesApps() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} exact />
      <Route path="/home" element={<HomePage />} exact />
      <Route path="/branch" element={<BranchPage />} exact />
    </Routes>
  );
}
