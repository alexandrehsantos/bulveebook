import './App.css';

import Logo from './component/Logo';

const menuOptions = ['Documents', 'GitHub', 'Forum', 'My Collections'];

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {menuOptions.map((option) =>
            <li className='option'><p>{option}</p></li>
          )}
        </ul>

      </header>
    </div>
  );
}

export default App;
