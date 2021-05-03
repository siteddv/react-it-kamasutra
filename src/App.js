import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
