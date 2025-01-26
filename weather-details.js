document.addEventListener('DOMContentLoaded', () => {
    const cityNameElement = document.getElementById('city-name');
    const weatherResults = document.getElementById('weather-results');
    const forecastResults = document.getElementById('forecast-results');
    const backButton = document.getElementById('back-btn');
  
    // Retrieve data from localStorage
    const weatherData = JSON.parse(localStorage.getItem('weatherData'));
    const forecastData = JSON.parse(localStorage.getItem('forecastData'));
  
    if (!weatherData || !forecastData) {
      alert('No weather data available. Please search again.');
      window.location.href = 'index.html';
      return;
    }
  
    // Display weather details
    cityNameElement.textContent = `Weather in ${weatherData.name}, ${weatherData.sys.country}`;
    weatherResults.innerHTML = `
      <div class="weather-card">
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Feels Like: ${weatherData.main.feels_like}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
      </div>
    `;
  
    // Display 5-day forecast
    forecastResults.innerHTML = `<h2>5-Day Forecast</h2>`;
    const forecasts = forecastData.list.filter((_, index) => index % 8 === 0);
  
    forecasts.forEach((forecast) => {
      const date = new Date(forecast.dt_txt).toLocaleDateString();
      forecastResults.innerHTML += `
        <div class="forecast-card">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Temperature:</strong> ${forecast.main.temp}°C</p>
          <p><strong>Weather:</strong> ${forecast.weather[0].description}</p>
        </div>
      `;
    });
  
    // Back button functionality
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  });
  