// This file is in the entry point in your webpack config.
  $.ajax({
    type: "GET",
    url: "http://weathersweater.herokuapp.com/api/v1/forecast?location=denver,co"
    })
    .then(function(details){
      currentWeather(details);
      currentDetails(details);
      dailyWeather(details);
      hourlyWeather(details);
    })
    .catch(function(error){
  });




function currentWeather(details) {
  var currently = details["data"]["attributes"]['currently'];
  var location = details["data"]['id'];
  var today = details["data"]["attributes"]["daily"][0];
  document.getElementById("current-location").innerHTML = location.toUpperCase();
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
  var daily = details["data"]["attributes"]["daily"];
  return daily
};

function hourlyWeather(details) {
  var hourly = details["data"]["attributes"]["hourly"].slice(0,12);
  return hourly
};
