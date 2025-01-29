import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Step 1")

  console.log("Step 2")

  console.log("Step 3")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>step 3</p>
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
