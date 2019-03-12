// This file is in the entry point in your webpack config.
  $.ajax({
    type: "GET",
    url: "http://weathersweater.herokuapp.com/api/v1/forecast?location=denver,co"
    })
    .then(function(details){
    var currently = details["data"]["attributes"]['currently'];
    var daily = details["data"]["attributes"]["daily"];
    var hourly = details["data"]["attributes"]["hourly"].slice(0,8);
    })
    .catch(function(error){
  });
