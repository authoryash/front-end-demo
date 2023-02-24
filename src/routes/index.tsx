import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
// import PublicRoutes from './PublicRoutes';

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      {/* <Route path="/*" element={<PublicRoutes />} /> */}
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
