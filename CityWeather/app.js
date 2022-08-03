const weather = document.querySelector('#weather');
const form = document.querySelector("form");
const search = document.querySelector('#search');

const getweather = (city)=> 
{
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`);
    request.send();

    request.onload= () => {

        const data = JSON.parse(request.responseText);
        console.log(data)
        if(data.cod == 200)
        {
            return showWeather(data);
        }
        else{
            weather.innerHTML = `${data.message}`;
        }  

    }

}

const showWeather = (data) => 
{
        weather.innerHTML = `
        <div>
                <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon }@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main }</h4>
            </div>
            `;
}

form.addEventListener("submit",function(event) 
{
    getweather(search.value);
    event.preventDefault();
})

