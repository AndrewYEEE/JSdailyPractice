const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


search.addEventListener('click', async () => {
    const APIKey = 'API_KEY';
    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return;

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => {
            if (response.status != 200) { //如果回傳code不為200
                container.style.height = '400px';  //拉高container
                weatherBox.style.display = 'none'; //把天氣資訊元件藏起來
                weatherDetails.style.display = 'none'; //把天氣細節元件藏起來
                error404.style.display = 'block'; //將error的display改成block
                error404.classList.add('fadeIn'); //綁定fadeIn動畫
                throw new TypeError("Oops, we haven't got JSON!");
            }else{
                return response.json();
            }
        } )
        .then(json => {
            //把404頁面藏好
            error404.style.display = 'none';  
            error404.classList.remove('fadeIn');

            //取得weather-box底下所有元件 (顯示要用到的元件)
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            //資料匯入
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'image/clear.jpg';
                    break;

                case 'Rain':
                    image.src = 'image/rain.jpg';
                    break;

                case 'Snow':
                    image.src = 'image/snow.jpg';
                    break;

                case 'Clouds':
                    image.src = 'image/cloud.jpg';
                    break;

                case 'Haze':
                    image.src = 'image/mist.jpg';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            //將display重設以加入動畫
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            
            //高度拉高
            container.style.height = '590px';


        })
        .catch(function(error) { console.log(error); });
});