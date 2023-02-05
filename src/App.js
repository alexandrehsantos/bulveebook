import './App.css';

import Header from './component/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg,#04081d 35%,#326589 165%);
`

function App() {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  );
}

export default App;
