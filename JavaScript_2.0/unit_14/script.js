const param = {
	url: 'https://api.openweathermap.org/data/2.5/',
	appid: '83260934a280ce8b938b287b57112ef0',
}

function getWeather() {
	const cityId = document.querySelector('#city').value
    console.log(cityId)
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
		.then(weather => {
			return weather.json()
		})
		.then(showWeather)
}



function showWeather(data) {
	console.log(data)
	document.querySelector('.out-deg').innerHTML = data.main.temp + '&deg;'
	document.querySelector(
		'.out-icon',
	).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
	document.querySelector('.out-weather').textContent = data.weather[0]['description']
}


getWeather()
document.querySelector('#city').onchange = getWeather