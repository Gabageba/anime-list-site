import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';

const AppRouter = () => (
  <Routes>
    {authRoutes.map(({ path, Element, ...rest }) => (
      <Route key={path} path={path} {...rest} element={<Element />} />
    ))}
    {publicRoutes.map(({ path, Element, ...rest }) => (
      <Route key={path} path={path} {...rest} element={<Element />} />
    ))}
    {/* <Route path="*" element={<CosmeticsHygiene/>}/> */}
  </Routes>
);

export default AppRouter;
