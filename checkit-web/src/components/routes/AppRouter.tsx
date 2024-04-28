import { Route, Routes } from 'react-router-dom';
import { authRoutes } from './routes';

const AppRouter = () => (
  <Routes>
    {authRoutes.map(({ path, Element }) => (
      <Route key={path} path={path} element={<Element />} />
    ))}
    {/* <Route path="*" element={<CosmeticsHygiene/>}/> */}
  </Routes>
);

export default AppRouter;
