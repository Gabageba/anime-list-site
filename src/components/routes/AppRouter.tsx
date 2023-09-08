import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '@components/routes/routes.ts';
import { routes } from '../../const/route.ts';
import ContentWrapper from '@ui/ContentWrapper/ContentWrapper.tsx';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route
          key={path}
          path={path}
          element={
            path === routes.AUTH_ROUTE ? (
              <Element />
            ) : (
              <ContentWrapper>
                <Element />
              </ContentWrapper>
            )
          }
        />
      ))}
      {/*<Route path="*" element={<CosmeticsHygiene/>}/>*/}
    </Routes>
  );
};

export default AppRouter;
