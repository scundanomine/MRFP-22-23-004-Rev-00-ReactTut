// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import {Welcome} from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="kisan"></Greet>
      <Welcome name="Seeta" heroName="Captain America"></Welcome>
      <Welcome name="Geeta" heroName="Wonder Women"></Welcome>
      <Welcome name="Ram" heroName="Iron Man"></Welcome>
    </div>
  );
}

export default App;
