const key = "2e711c52b1a8ead2b044fa4d98e0bb4a";
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=2e711c52b1a8ead2b044fa4d98e0bb4a';

// //Fetch API and get the PROMISE data in JSON
// fetch(baseURL)
//   .then(data => {
//       console.log('response', data.json())
//   })
//   .catch(error => {
//       console.log(error)
//   })

const requestCity = async(city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; 
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL+query);

    //promise data
    const data = await response.json();
    return data;
}
