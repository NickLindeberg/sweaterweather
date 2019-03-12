// This file is in the entry point in your webpack config.

$.ajax({
  type: "GET",
  url: "http://weathersweater.herokuapp.com/api/v1/forecast?location=denver,co"
})
// if successful, request is handled by `.then`
// JSON response, here named `posts`, is passed to anonymous function
.then(function(details){
debugger;

})
.catch(function(error){
  // only here if there was an error,
  // so handle error if there is one
});
