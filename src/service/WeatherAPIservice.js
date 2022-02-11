export class WeatherService {
    static baseUrl = 'http://api.weatherapi.com/v1/current.json'
    
    static async getWeatherInfo(city){
        const url = `${this.baseUrl}?key=${process.env.REACT_APP_API_KEY}&q=${city}`;
        
        try{
            const response = await fetch(url);
    
            if(!response.ok){
                throw new Error('Что-то пошло не так');
            }

            return response.json();
        }
        catch(e){
            console.log('не ну дужище тут реально что-то не так')
        }
    }
}