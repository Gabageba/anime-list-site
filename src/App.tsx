import './styles/index.scss';
import Header from '@components/Header/Header.tsx';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper.tsx';

const App = () => {
  return (
    <ContentWrapper>
      <Header />
    </ContentWrapper>
  );
};

export default App;
