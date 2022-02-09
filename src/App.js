import './App.css';
import {useEffect,useState,useCallback} from 'react';

const API_KEY = 'befb2f4fa3b74919a35105844220902';

async function getWeatherInfo(city){
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  const response = await fetch(url);
  if(!response.ok){
    throw new Error('Что-то пошло не так');
  }
  return await response.json();
}

function WeatherInfoBlock({city}){
  const [isNotValidResponse,setIsNotValidResponse] = useState(false);
  const [info,setInfo] =useState({});

  useEffect(()=>getWeatherInfo(city)
  .then(data=>{
      console.log(data.current);
      setInfo({temp:data.current.temp_c,flTemp:data.current.feelslike_c})
      setIsNotValidResponse(false);})
  .catch(()=>{
    setIsNotValidResponse(true);
  }),[city]);

  return(
    <div>{isNotValidResponse ? <p>Что-то пошло не так</p>:
      <p>Температура:{`${info.temp}`} Ощущается как:{`${info.flTemp}`} </p>}
    </div>
  )
}

function App() {
  const [city,setCity] = useState('');
  const inputChangeHandler = e =>{
    setCity(e.target.value);
  }

  return (
    <div className="App">
        <input type='text' 
            onChange={inputChangeHandler} />
        {city ? <WeatherInfoBlock city = {city}/>: <p>Введите город</p>}
    </div>
  );
}

export default App;
