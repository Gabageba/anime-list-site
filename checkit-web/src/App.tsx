import './styles/index.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux.ts';
import {
  getShikimoryAuthCodeFromStorage,
  getShikimoryToken,
  getShikimoryTokenFromStorage,
  refreshShikimoryToken,
} from './store/reducers/auth/AuthActionCreator.ts';
import AppRouter from './components/routes/AppRouter.tsx';
import Auth from './pages/Auth/Auth.tsx';

const App = () => {
  const { shikimoryToken, shikimoryAuthCode, error } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShikimoryTokenFromStorage()).then((token) => {
      if (!token) {
        dispatch(getShikimoryAuthCodeFromStorage());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (shikimoryToken && Date.now() >= shikimoryToken.expires_in * 1000) {
      dispatch(refreshShikimoryToken(shikimoryToken.refresh_token));
    } else if (!shikimoryToken && shikimoryAuthCode) {
      dispatch(getShikimoryToken(shikimoryAuthCode));
    }
  }, [shikimoryToken, shikimoryAuthCode, dispatch]);

  return <>{error ? <div>{error}</div> : shikimoryToken ? <AppRouter /> : <Auth />}</>;
};

export default App;
