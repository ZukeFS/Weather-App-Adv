const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

//temperature
const spitOutCelsius = (kelvin) => {
    celsius = Math.round(kelvin - 273.15);
    return celsius;
}

//Day or night
const isDayTime = (icon) => {
    if(icon.includes('d')) return true;
    else return false;
}

//weather update information
updateWeatherApp = (city) => {
    console.log(city);
    const imagename = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imagename}@2x.png`;
    cityName.textContent = city.name;
    cardBody.innerHTML = `
       <div class="card-mid row">
            <div class="col-8 text-center temp">
                <span>${spitOutCelsius(city.main.temp)}&deg;C</span>
            </div>

            <div class ="col-4 condition-temp">
                <p class="condition">${city.weather[0].description}</p>
                <p class="high">${spitOutCelsius(city.main.temp_max)}&deg;C</p>
                <p class="low">${spitOutCelsius(city.main.temp_min)}deg;C</p>
            </div>
        </div>

        <div class="icon-container card shadow mx-auto">
            <img src="${iconSrc}" alt="image1"> 
        </div>

        <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
                <p>${spitOutCelsius(city.main.feels_like)}&deg;C</p>
                <span>Feels like</span>
            </div>

            <div class="col text-center">
                <p>${city.main.humidity}</p>
                <span>Humidity</span>
            </div>
        </div>
    `;

    if(isDayTime(imagename)){
        console.log('Day');
        timeImage.setAttribute('src', 'img/day_image.svg');
        if(cityName.classList.contains('text-white')){
            cityName.classList.remove('text-white');
        }
        else{
            cityName.classList.add('text-black');
        }
    }
    else{
        console.log('Night');
        timeImage.setAttribute('src', 'img/night_image.svg');
        if(cityName.classList.contains('text-black')){
            cityName.classList.remove('text-black');
        }
        else{
            cityName.classList.add('text-white');
        }
    }

    cardInfo.classList.remove('d-none');
}


//add an event listener to the form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
      .then((data) => {
          updateWeatherApp(data);
      })
      .catch((error) => {
          console.log(error)
      })
})