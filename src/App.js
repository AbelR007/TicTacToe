import './App.css';

function App() {
  const AppName = "TicTacToe";

  return (
    <div className="App">
      <h1 className={AppName}>
        {AppName}
      </h1>
      <p className="desc">
        Simple TicTacToe Game build in React JS
      </p>
    </div>
  );
}

export default App;
