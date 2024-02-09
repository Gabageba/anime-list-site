import './styles/index.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {
  getShikimoryAuthCodeFromStorage,
  getShikimoryToken,
  getShikimoryTokenFromStorage,
  refreshShikimoryToken,
} from './store/reducers/auth/AuthActionCreator';

const App = () => {
  const { shikimoryToken, shikimoryAuthCode } = useAppSelector(
    (state) => state.authReducer,
  );
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

  return <>aasdfdfsфвыаdf</>;
};

export default App;
