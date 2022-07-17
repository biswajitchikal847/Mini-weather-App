
import './App.css';
import { WeatherApp } from './Componet/WeatherApp';
import {IpLookUp} from "./Componet/Location_permission";

function App() {
  return (
    <div className="App">
      <IpLookUp />
      <WeatherApp />
    </div>
  );
}

export default App;
