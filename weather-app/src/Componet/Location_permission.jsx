import { useEffect, useState } from "react";
import { WeatherApp } from "./WeatherApp";
import { Loader } from "./Loader/Loader";

export const CurrentLocation= () => {
const [lat,setLat] = useState("")
const [log,setLog] = useState("")
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Location Not Found")
    }
  }

  function showPosition(position) {
    setLat(position.coords.latitude )
    setLog(position.coords.longitude);
  }
  useEffect(() => {
    getLocation()
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
   {lat ? <WeatherApp lati={lat} logi={log} currlocation={true}/> : <Loader /> }
    
  </>
)

}




