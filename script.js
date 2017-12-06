$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position) { // location call  
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=8421ccdba1ed7d7315bbcdde0f687adf", function(json) {

			var icon = "<img src = 'http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
