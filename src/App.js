import './App.css';
import { useState } from 'react';
import {WeatherInfoBlock} from './components/WeatherInfoBlock'

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