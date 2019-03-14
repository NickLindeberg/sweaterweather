// This file is in the entry point in your webpack config.

function findCity() {
  var cityData = document.getElementById("citySearch").value;
  $.get("http://weathersweater.herokuapp.com/api/v1/forecast?location=" + cityData)
    .then(function(details){
      currentWeather(details);
      currentDetails(details);
      dailyWeather(details);
      hourlyWeather(details);
    })
    .catch(function(error){
  });
};

function currentWeather(details) {
  var currently = details["data"]["attributes"]['currently'];
  var cityTitle = details["data"]['id'];
  var today = details["data"]["attributes"]["daily"][0];
  document.getElementById("current-location").innerHTML = cityTitle.toUpperCase();
  document.getElementById("current-summary").innerHTML = currently["summary"];
  document.getElementById("current-temp").innerHTML = Math.round(currently["temperature"]);
  document.getElementById("current-time").innerHTML = currently["time"];
  document.getElementById("today-high").innerHTML = Math.round(today["high"]);
  document.getElementById("today-low").innerHTML = Math.round(today["low"]);
};

function currentDetails(details) {
  var current = details["data"]["attributes"]["currently"];
  document.getElementById("feels-like").innerHTML = Math.round(current["temperature"]);
  document.getElementById("humidity").innerHTML = (current["humidity"]*100);
  document.getElementById("visibility").innerHTML = current["visibility"];
  document.getElementById("uv-index").innerHTML = current["uv_index"];
  details["data"]["attributes"]["daily"][0]["summary"]

  document.getElementById("summary-day").innerHTML = details["data"]["attributes"]["daily"][0]["summary"];
  document.getElementById("summary-night").innerHTML = details["data"]["attributes"]["daily"][7]["summary"];
}

function dailyWeather(details) {
  document.getElementById("each-day").innerHTML = ""
  var daily = details["data"]["attributes"]["daily"];
  var day;
  for (var day = 0; day < 8; day++) {
    debugger;
    document.getElementById("each-day").innerHTML += daily[day].time.split(" ")[0] + " " + daily[day].icon + " " + daily[day].summary + " " + daily[day].precipitation + " " + daily[day].high + " " + daily[day].low + "<br>";
  }
};

function hourlyWeather(details) {
  document.getElementById("hour").innerHTML = ""
  var hourly = details["data"]["attributes"]["hourly"].slice(0,8);
  var hour;
  for (var hour = 0; hour < 9; hour++) {
    document.getElementById("hour").innerHTML += hourly[hour].time.split(" ")[3] + " " + hourly[hour].icon + " " + Math.round(hourly[hour].temp) + "<br>";
  }
};


window.findCity = findCity;
