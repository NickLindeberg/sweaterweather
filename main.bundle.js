/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	// This file is in the entry point in your webpack config.

	// import other js modules here

	function findCity() {
	  var cityData = document.getElementById("citySearch").value;
	  $.get("http://weathersweater.herokuapp.com/api/v1/forecast?location=" + cityData).then(function (details) {
	    currentWeather(details);
	    currentDetails(details);
	    dailyWeather(details);
	    hourlyWeather(details);
	    clearHeart();
	  }).catch(function (error) {});
	};

	function favCity() {
	  var getCityData = document.getElementById("citySearch").value;
	  debugger;
	  $.post("http://weathersweater.herokuapp.com/api/v1/favorites", {
	    api_key: "c5373477-4eea-4daf-8beb-25e025d56f8e",
	    location: getCityData
	  });
	};

	document.getElementById("toggle-heart").onclick = function () {
	  if (this.checked) {
	    alert('favorite added');
	    favCity();
	  }
	};

	function clearHeart() {
	  document.getElementById("toggle-heart").checked = true;
	}

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
	  document.getElementById("humidity").innerHTML = current["humidity"] * 100;
	  document.getElementById("visibility").innerHTML = current["visibility"];
	  document.getElementById("uv-index").innerHTML = current["uv_index"];
	  details["data"]["attributes"]["daily"][0]["summary"];

	  document.getElementById("summary-day").innerHTML = details["data"]["attributes"]["daily"][0]["summary"];
	  document.getElementById("summary-night").innerHTML = details["data"]["attributes"]["daily"][7]["summary"];
	}

	function dailyWeather(details) {
	  document.getElementById("each-day").innerHTML = "";
	  var daily = details["data"]["attributes"]["daily"];
	  var day;
	  for (var day = 0; day < 8; day++) {
	    document.getElementById("each-day").innerHTML += daily[day].time.split(" ")[0] + " " + daily[day].icon + " " + daily[day].summary + " " + daily[day].precipitation + " " + daily[day].high + " " + daily[day].low + "<br>";
	  }
	};

	function hourlyWeather(details) {
	  document.getElementById("hour").innerHTML = "";
	  var hourly = details["data"]["attributes"]["hourly"].slice(0, 8);
	  var hour;
	  for (var hour = 0; hourly.length; hour++) {
	    document.getElementById("hour").innerHTML += hourly[hour].time.split(" ")[3] + " " + hourly[hour].icon + " " + Math.round(hourly[hour].temp) + "<br>";
	  }
	};

	// hourly.map() => {
	//   document.getElementById("hourly").innerHTML = hourly.time;
	//   document.getElementById("icon").innerHTML = hourly.time;
	//   document.getElementById("hour").innerHTML = hourly.time;
	//
	// }

	function signUpModal() {
	  var modal = document.getElementById('sign-up-modal');
	  var signUp = document.getElementById("sign-up");
	  var span = document.getElementsByClassName("close")[0];
	  signUp.onclick = function () {
	    modal.style.display = "block";
	  };

	  span.onclick = function () {
	    modal.style.display = "none";
	  };
	}

	window.signUpModal = signUpModal;
	window.findCity = findCity;

/***/ })
/******/ ]);