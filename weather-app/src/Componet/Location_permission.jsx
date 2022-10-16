import { useEffect, useState } from "react";

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


return(
  <>
    <div>
      {lat}
    </div>
    <div>
      {log}
    </div>
  </>
)

}




