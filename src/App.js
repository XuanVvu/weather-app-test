
import './App.css';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Search from './search/Search';
import Weather from './view/Weather';
import { convertLanguage } from './JS/convertLanguage';

function App() {
  const[dataName, setDataName] = useState('Thành phố Hà Nội')
  const [isLoading, setIsLoading] = useState(true)
  const [locationData, setLocationData] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecastWeather, setForeCastWeather] = useState([])


  const handleData = (data) => {
    setDataName(data)
  }

  const convertName = convertLanguage(dataName)

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)
            let res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=6c5c4a7187f240eba2f112457230101&q=${convertName}`) 
            setLocationData(res.data.location)
            setCurrentWeather(res.data.current)
            setForeCastWeather(res.data.forecast)
            setIsLoading(false)
        }
        fetchData();
    },[dataName])

    
  return (
    <Fragment>
      <div className='wrapper'>
          <Search
            onData={handleData}
          />
          {locationData&&
            <Weather
              isLoading = {isLoading}
              locationData={dataName}
              currentWeather= {currentWeather}
              forecastWeather = {forecastWeather}
            />
          }
      </div>
      
     
    </Fragment>
  );
}

export default App;
