
function getJSON(url){
  return new Promise (function(resolve, reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url)
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){
        var response = JSON.parse(ajax.responseText)
        resolve(response)
      };
    };
  });
};

getJSON("data/earth-like-results.json")
.then(function(response){
  return getJSON(response.results[0])
})
.then(function(responsePlanet){
  console.log(responsePlanet)
});
