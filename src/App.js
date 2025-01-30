import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          すべてはこの星で　生き続けるために。
        </p>
        <a
          className="App-link"
          href="https://www.biprogy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BIPROGY
        </a>
      </header>
    </div>
  );
}

export default App;
