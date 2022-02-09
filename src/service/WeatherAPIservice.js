export async function getWeatherInfo(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`;
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