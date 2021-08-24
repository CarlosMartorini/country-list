import './App.css';
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
