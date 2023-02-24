import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateLayout from '@layouts/PrivateLayout';
import Bots from '@pages/Bot';

const PrivateRoutes = (): ReactElement => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Bots />} />
      </Routes>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
