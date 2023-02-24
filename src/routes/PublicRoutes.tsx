import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '@layouts/PublicLayout';
import LandingPage from '@pages/LandingPage';
import Login from '@pages/Login';

const PublicRoutes = (): ReactElement => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
