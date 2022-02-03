import React,{useState} from 'react'
import Axios from 'axios'

const Home = () => {

    const [city, setCity] = useState('')
    const [load, setLoad] = useState(false)
    const [weatherData, setWeatherData] = useState({
        description: '',
        temp: 0,
        humidity: 0 
    })
    const Search = () =>{
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b52883bffea9bc2b3c8df7274f3aa1d5`
        ).then((response)=>{
            console.log(response.data);
            setWeatherData({
               
                description: response.data.weather[0].description,
                temp: response.data.main.temp,
                humidity: response.data.main.humidity
            })
            setLoad(true)
        })
    }
    const degree = (weatherData.temp - 32) * 5/9

    return (
        <div>
            <div>
                <h1>
                    Weather App
                </h1>
                <div>
                    <input type="search" placeholder='search' value={city} onChange={e => setCity(e.target.value)}/>
                    <button onClick={Search}>search</button>
                </div>
                <div>
                   
                 {load?  <div><p>description:{weatherData.description}</p>
                    <p>temp: {degree}</p>
                   <p> humidity: {weatherData.humidity}%</p></div> : ''}
                   
                </div>
            </div>
        </div>
    )
}

export default Home
