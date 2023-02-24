import { ReactElement, Suspense } from 'react';
import AppRoutes from './routes';
import './App.css';

const App = (): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <AppRoutes />
  </Suspense>
);

export default App;
