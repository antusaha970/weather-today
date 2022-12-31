const changeText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const setIcon = (code) => {
    document.getElementById("img").setAttribute("src", `https://openweathermap.org/img/wn/${code}@2x.png`);
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', () => {
    const inputWeather = document.getElementById('inputWeather').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputWeather}&appid=9f6a1915508cfcb2df09b355177ab869`)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round((data.main.temp) - 273.15);
            changeText("temperature", temp);
            const statusArr = data.weather;
            const status = statusArr[0];
            changeText("status", status.main);
            const iconCode = status.icon;
            setIcon(iconCode);
        });
    changeText("city", inputWeather);
})