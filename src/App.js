import './App.css';
import {useEffect,useState} from 'react';
import {getWeatherInfo} from './service/WeatherAPIservice';

function WeatherInfoBlock({city}){
  const [isNotValidResponse, setIsNotValidResponse] = useState(false);
  const [{temp, flTemp},setInfo] =useState({});

  useEffect(() => getWeatherInfo(city)
  .then(({current}) => {
      setInfo({temp:current.temp_c, flTemp:current.feelslike_c})
      setIsNotValidResponse(false); })
  .catch(() => {
    setIsNotValidResponse(true);
  }), [city]);

  return(
    <div>{isNotValidResponse ? <p>Что-то пошло не так</p>:
      <p>Температура:{`${temp}`} Ощущается как:{`${flTemp}`} </p>}
    </div>
  )
}

function App() {
  const [city,setCity] = useState('');
  return (
    <div className="App">
        <input value = {city}
            type='text' 
            onChange={(e) => setCity(e.target.value)} />
        {city ? <WeatherInfoBlock city = {city}/> : <p>Введите город</p>}
    </div>
  );
}

export default App;
