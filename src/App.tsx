import './styles/index.scss';
import Header from '@components/Header/Header.tsx';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper.tsx';
// import Auth from '@pages/Auth/Auth.tsx';

const App = () => {
  return (
    <ContentWrapper>
      <Header />
      {/*<Auth />*/}
    </ContentWrapper>
  );
};

export default App;
