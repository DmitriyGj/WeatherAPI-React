import {useState, useEffect} from 'react';
import { WeatherService } from '../service/WeatherAPIservice';

export function WeatherInfoBlock({city}){
    const [isNotValidResponse, setIsNotValidResponse] = useState(false);
    const [{temp, flTemp}, setInfo] = useState({temp:0, flTemp:0});

    useEffect(() => {
        const fetchData = async() => {
            try{
                const {current} = await WeatherService.getWeatherInfo(city);

                setInfo({temp:current.temp_c, flTemp: current.feelslike_c});
                setIsNotValidResponse(false);
            }
            catch{
                setIsNotValidResponse(true);
            }
        }

        fetchData();
        }, [city]);

    return(
        <div>{isNotValidResponse ? 
            <p>Что-то пошло не так</p>:
            <p>Температура: {temp} Ощущается как: {flTemp} </p>}
        </div>
    )
}