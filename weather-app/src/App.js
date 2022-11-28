
import './App.css';
import { WeatherApp } from './Componet/WeatherApp';
import {CurrentLocation} from "./Componet/Location_permission";
import { Cityname } from './Componet/Cityname';

function App() {
  return (
    <div className="App">
      <CurrentLocation />
      {/* <WeatherApp /> */}
      {/* <Cityname /> */}
      
    </div>
  );
}

export default App;
