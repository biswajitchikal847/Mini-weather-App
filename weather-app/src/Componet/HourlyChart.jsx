import { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

export const HourlyChart = ({hourlydata}) => {

   
    const temp = [];
  
      for(let i = 0; i < 24; i++){
        temp.push(Math.round(hourlydata.data.hourly[i].temp-273));
      }
    //  console.log()
      const [chardata, setChartdata] = useState({
        series: [{
            name: "Temprature",
            data: temp
          }],
          options: {
            chart: {
              type: 'area',
              height: 350,
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            
            title: {
              
              align: 'left'
            },
            subtitle: {
              
              align: 'left'
            },
            // labels: [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17],
            xaxis: {
                labels: {
                    format: 'H',
                  }
            },
            yaxis: {
              opposite: false
            },
            legend: {
              horizontalAlign: 'left'
            }
          },
        
        
      })

console.log(hourlydata)
         return (
          <>
          
           <ReactApexChart options={chardata.options} series={chardata.series} type="area" height={320} /> 
          
         

          </>
         )
}


