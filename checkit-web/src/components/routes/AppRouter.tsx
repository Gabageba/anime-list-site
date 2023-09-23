import { Route, Routes } from 'react-router-dom';
import { authRoutes } from './routes';
import ContentWrapper from '../../ui/ContentWrapper/ContentWrapper';

const AppRouter = () => (
  <Routes>
    {authRoutes.map(({ path, Element }) => (
      <Route
        key={path}
        path={path}
        element={
          <ContentWrapper>
            <Element />
          </ContentWrapper>
        }
      />
    ))}
    {/* <Route path="*" element={<CosmeticsHygiene/>}/> */}
  </Routes>
);

export default AppRouter;
