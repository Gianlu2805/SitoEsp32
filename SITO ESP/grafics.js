let delayRain = 1000000; // Default value  
  
  window.onload = function() {// Fetch data from the API
fetch('https://api.open-meteo.com/v1/forecast?latitude=43.7262&longitude=12.6363&current=is_day,precipitation,cloud_cover,wind_speed_10m&timezone=Europe%2FBerlin&forecast_days=1')
  .then(response => response.json())
  .then(data => {
    // Extract relevant information into variables
    const latitude = data.latitude;
    const longitude = data.longitude;
    const isDay = data.current.is_day;
    const precipitation = data.current.precipitation;
    const cloudCover = 100;
    const windSpeed = 300/data.current.wind_speed_10m;

    // Now you can use these variables as needed
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    console.log('Is Day:', isDay);
    console.log('Precipitation:', precipitation);
    console.log('Cloud Cover:', cloudCover);
    console.log('Wind Speed:', windSpeed);

    
    const navbar = document.querySelector('.navbar');


    if(isDay) {
      navbar.classList.remove('bg-dark');
      navbar.classList.add('bg-primary');
      document.body.style.backgroundColor = "RGB("+(170*(1-cloudCover*0.003))+","+(204*(1-cloudCover*0.003))+" ,"+(238*(1-cloudCover*0.003))+" )";
    }
    else{
      navbar.classList.remove('bg-primary');
      navbar.classList.add('bg-dark');
      document.body.style.backgroundColor = "#345";
    }

    const clouds = document.querySelectorAll('.banner .clouds img');
    clouds.forEach(cloud => {
        cloud.style.setProperty('--wind', windSpeed + 's');
        cloud.style.setProperty('--cloudCover', cloudCover);
    }); 

    delayRain = -245/9*precipitation + 290/9;
    if(precipitation == 0) {
      delayRain = 10000000;}
      

    

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}