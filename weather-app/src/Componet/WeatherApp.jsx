import { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import { ImLocation } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { TiWeatherSunny } from 'react-icons/ti';
import { TiWeatherShower } from 'react-icons/ti';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { HourlyChart } from "./HourlyChart";


export const WeatherApp = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [sevendata, setSevensetData] = useState({});
    const [lat, setlat] = useState(0);
    const [lon, setlon] = useState(0);


    const arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];

    const APikey = "58feccf8f4b05447650ca18c81d6f659";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APikey}`;

    const searchLocation = (event) => {
        if (event.key = "Enter") {
            axios.get(url)
                .then((res) => {
                    setData(res.data)
                    // console.log(res.data)
                    setlat(res.data.coord.lat)
                    setlon(res.data.coord.lon)
                    sevenDayWeather();   //data.coord.lat,data.coord.lon
                })
        }
    }

    function sevenDayWeather() {

        const sevendayurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APikey}`;
        axios.get(sevendayurl)
            .then((res) => {
                setSevensetData(res);
                console.log(sevendata);
                // console.log(res.data.daily[0].temp.max);
            })
    }


    

    function convertTime(unixTime){
        let dt = new Date(unixTime * 1000)
        let h = dt.getHours()
        let m = "0" + dt.getMinutes()
        let t = h + ":" + m.substr(-2)
        return t
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

                {sevendata.data ? <div id="sevenday_forcast">
                    {arr.map((e, index) => {
                        return (
                            <>

                                <div  id="sevenday_parentdiv" key={index}>
                                    <div id="days">{e}</div>
                                    <div id="minAndmax">
                                        <span> {Math.round(sevendata.data.daily[index].temp.max - 273)}°</span>
                                        <span>{Math.round(sevendata.data.daily[index].temp.min - 273)}°</span>
                                    </div>
                                    {/* {console.log(sevendata.data.daily[index].clouds)} */}
                                    <div id="ind_icon">
                                        {/* {sevendata.data.daily[index].weather[0].main == "Clouds" ?  <TiWeatherPartlySunny /> ? sevendata.data.daily[index].weather[0].main == "Rain" ? <TiWeatherShower /> : <TiWeatherSunny />} */}
                                        {(() => {
                                            if (sevendata.data.daily[index].weather[0].main == "Clouds")
                                                return <TiWeatherPartlySunny />
                                            else if (sevendata.data.daily[index].weather[0].main == "Rain")
                                                return <TiWeatherShower />
                                            else
                                            return <TiWeatherSunny />
                                        })()}
                                    </div>
                                    <div>
                                        {sevendata.data.daily[index].weather[0].main}
                                    </div>


                                </div>

                            </>
                        )
                    })}
                </div> : <p>Loading...</p>}


                {data.main ?  <div id="tempAndGraph_div">
                    <div id="tempAndGrap_subdiv">
                        <div>
                            <div>
                                {data.main ? <h1>{Math.round(data.main.temp - 273)}°C</h1> : null}
                            </div>
                            <div>
                                <TiWeatherPartlySunny />
                            </div>
                        </div>
                        {sevendata.data ? <div id="dailyTempGraph">
                                <HourlyChart hourlydata={sevendata} />
                        </div>
                        : null }

                       <div id="prsAndhum">
                                <div>
                                    <div>
                                    <p>Pressure</p>
                                    <p>{data.main.pressure} hpa</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div>
                                    <p>Humidity</p>
                                    <p>{data.main.humidity} %</p>
                                    </div>
                                
                                
                                </div>
                        </div>
                        

                       <div id="sunriseAnsset">
                        <div>
                            <p>Sunrise</p>
                            {/* <p>{data.sys.sunrise}</p> */}
                            <p>{convertTime(data.sys.sunrise)}am</p>

                        </div>
                        <div>
                            <p>Sunset</p>
                            {/* <p>{data.sys.sunset}</p> */}
                            <p>{convertTime(data.sys.sunset)}pm</p>
                        </div>
                       </div>

                    </div>

                </div>
                : <p>Loading...</p> }
            </div>

        </div>
    )
}