import { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import { ImLocation } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherPartlySunny } from 'react-icons/ti';



export const WeatherApp = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [sevendata, setSevensetData] = useState({});

    const arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];

    const key = "58feccf8f4b05447650ca18c81d6f659";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

    const searchLocation = (event) => {
        if (event.key = "Enter") {
            axios.get(url)
                .then((res) => {
                    setData(res.data)
                    console.log(res.data)
                })
        }
    }

  async function sevenDayWeather(lat,lon){
         try{
            const sevendayurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}`;
            let res1 = await fetch(sevendayurl);
            let data1 = await res1.json();
            console.log(data1)
         }catch(e){
            console.log(e);
         }
  }






    return (
        <div>
            <div id="parent_div">
                <div id="search_div">
                    <div id="location_icon"> <ImLocation /></div>
                    <input
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        onKeyPress={searchLocation}
                        type="text" placeholder="Search" />
                    <div ><AiOutlineSearch /></div>
                </div>
                <div id="sevenday_forcast">
                    {arr.map((e, index) => {
                        return (
                            <>
                                <div id="sevenday_parentdiv">
                                    <div id="days">{e}</div>
                                </div>

                            </>
                        )
                    })}
                </div>
                <div id="tempAndGraph_div">
                    <div id="tempAndGrap_subdiv">
                        <div>
                            <div>
                                {data.main ? <h1>{Math.round(data.main.temp - 273)}°C</h1> : null}
                            </div>
                            <div>
                                <TiWeatherPartlySunny />
                            </div>
                        </div>
                        <div>

                        </div>

                        <div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}