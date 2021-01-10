import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div class="app-section">
        <Header></Header>
      </div>
      <div class="app-section">
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default App;
