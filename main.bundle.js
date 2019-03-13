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
	$.ajax({
	  type: "GET",
	  url: "http://weathersweater.herokuapp.com/api/v1/forecast?location=chicago,il"
	}).then(function (details) {
	  currentWeather(details);
	  currentDetails(details);
	  dailyWeather(details);
	  hourlyWeather(details);
	}).catch(function (error) {});

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
	  document.getElementById("humidity").innerHTML = current["humidity"] * 100;
	  document.getElementById("visibility").innerHTML = current["visibility"];
	  document.getElementById("uv-index").innerHTML = current["uv_index"];
	  details["data"]["attributes"]["daily"][0]["summary"];

	  document.getElementById("summary-day").innerHTML = details["data"]["attributes"]["daily"][0]["summary"];
	  document.getElementById("summary-night").innerHTML = details["data"]["attributes"]["daily"][7]["summary"];
	}

	function dailyWeather(details) {
	  var daily = details["data"]["attributes"]["daily"];
	  return daily;
	};

	function hourlyWeather(details) {
	  var hourly = details["data"]["attributes"]["hourly"].slice(0, 12);
	  return hourly;
	};

/***/ })
/******/ ]);