// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";
// import Home from "./components/Home";
import SearchCity from "./components/SearchCity";
import WeatherData from './components/WeatherData'
import Axios from "axios";
import { useState } from "react";

const Wrapper = styled.div`
    height: 65vh;
    width: 28vw;
    margin: auto auto;
    /* border: 1px solid grey; */
    box-shadow: 0px 0px 8px black;
    border-radius: 4px;
    padding-top: 20px;
    /* background-color: #99b6dd; */
    background-color: #D9D7F1;
    @media (max-width: 800px) {
   width: 80vw;
   
  }
  `
  const Applabel = styled.div`
  font-weight: bolder;
  text-align: center;
  margin: 20px;
  font-size: 25px;
`

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({
    description:'',
    temp:0,
    humidity:0,
    country:'',
    wind:0,
    name:'',
    pressure:0,
    sunset:0,
})

  const [render, setRender] = useState(true);

  const Search = () =>{
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b52883bffea9bc2b3c8df7274f3aa1d5`
    ).then((response)=>{
        console.log(response.data);
        setWeatherData({
            // response.data
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            country: response.data.sys.country,
            wind: response.data.wind.speed,
            name: response.data.name,
            pressure : response.data.main.pressure,
            sunset: response.data.sys.sunset
        })
          
    })
    setRender(false)
}
console.log(weatherData, 'appJS')

  const tempConversion = weatherData.temp - 273;
  const temperature = Math.trunc(tempConversion)
  const theDate = new Date(weatherData.sunset * 1000);
  
  const time = theDate.toString().split(' ')
  console.log(time[4],'time2');
  console.log(theDate,'date3');
  

  // const time = moment(weatherData.sunset).format("h:mm:ss");
  // console.log(time,'newtime');
  
  return (
    <div className="App">
    <Wrapper> 
      <div>
      <Applabel>React Weather App</Applabel>
      </div>
    {render ?  <SearchCity city={city} setCity={setCity} Search={Search}/> :
    <WeatherData 
    // weatherData={weatherData}
    desc={weatherData.description} 
    temp={temperature}
     country={weatherData.country}
      humidity={weatherData.humidity}
      name={weatherData.name}
      wind={weatherData.wind}
      pressure={weatherData.pressure}
      sunset={time[4]}
      />}
    </Wrapper>
    </div>
  );
}

export default App;
