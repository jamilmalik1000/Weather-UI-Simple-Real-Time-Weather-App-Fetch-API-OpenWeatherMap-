async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY_HERE";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("Invalid city");

    const data = await res.json();
    console.log(data);

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temp: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].main}</p>
    
    `
    ;
  } catch (err) {
    document.getElementById("result").innerHTML = `<p>${err}</p>`;
  }
}
//   <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>