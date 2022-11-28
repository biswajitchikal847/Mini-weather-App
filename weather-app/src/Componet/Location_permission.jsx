import { useEffect, useState } from "react";
import { WeatherApp } from "./WeatherApp";
import { Loader } from "./Loader/Loader";
import axios from 'axios';


export const CurrentLocation= () => {
const [lat,setLat] = useState("")
const [log,setLog] = useState("")
const [getCity, setGetcity] = useState("")
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Location Not Found")
    }
  }
  function showCityname() {

    const link = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${log}&localityLanguage=en`;
    axios.get(link)
        .then((res) => {
          setGetcity(res.data.city);
            console.log(getCity, "City name");
            // console.log(res.data.daily[0].temp.max);
            console.log(res.data.city, "city response")
        })
}
  function showPosition(position) {
    setLat(position.coords.latitude )
    setLog(position.coords.longitude);
  }
  useEffect(() => {
    getLocation()
    showCityname()
  },[])

console.log(lat,log, "current location")
return(
  <>
    {/* <div>
      {lat}
    </div>
    <div>
      {log}
    </div> */}
   {lat ? <WeatherApp lati={lat} logi={log} currlocation={true} currentCity={getCity}/> : <Loader /> }
    
  </>
)

}




