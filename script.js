const apiKey = '9794f485165bcff5a9aa8f0b88c6ded8'; // Your API key
const searchButton = document.getElementById('search-btn');
const locationInput = document.getElementById('location');

// Redirect to results page with weather data
searchButton.addEventListener('click', async () => {
  const location = locationInput.value.trim() || 'London';

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const currentWeather = await response.json();

    if (response.ok) {
      // Save weather data to sessionStorage
      sessionStorage.setItem('weatherData', JSON.stringify(currentWeather));
      // Redirect to the weather results page
      window.location.href = 'weather.html';
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    alert('Error fetching weather data. Please try again.');
    console.error('Error:', error);
  }
});
