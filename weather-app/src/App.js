
import './App.css';
import { WeatherApp } from './Componet/WeatherApp';
import {CurrentLocation} from "./Componet/Location_permission";

function App() {
  return (
    <div className="App">
      <CurrentLocation />
      <WeatherApp />
    </div>
  );
}

export default App;
