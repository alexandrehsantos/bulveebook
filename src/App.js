import Header from './component/Header';
import LastBookReleases from './component/LastBookReleases';
import Search from './component/Search';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`
function App() {
  return (
    <Wrapper>
      <Header />
      <Search />
      <LastBookReleases />
    </Wrapper>
  );
}

export default App;
