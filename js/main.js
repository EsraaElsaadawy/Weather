var response = "";
var responseJson = "";
var myElement = document.getElementById("find");
myElement.addEventListener("input", getData);

getData()
async function getData() {
var x=myElement.value
if(x==""){
    x="Cairo"
}
        response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=23abbaf3e17543ed8d2191715220706&q=${x}&days=3&aqi=no&alerts=no`)
        responseJson = await response.json()

    // console.log(responseJson)
    // console.log("name:", responseJson.location.name)
    // console.log("temp:", responseJson.current.temp_c)
    // console.log("icon:", responseJson.current.condition.icon)
    // console.log("text:", responseJson.current.condition.text)
    // console.log("windDir:", responseJson.current.wind_dir)
    // console.log("time:", responseJson.location.localtime)

    // console.log("tomorrow text:", responseJson.forecast.forecastday[1].day.condition.text)
    // console.log("tomorrow icon:", responseJson.forecast.forecastday[1].day.condition.icon)
    // console.log("tomorrow max-temp:", responseJson.forecast.forecastday[1].day.maxtemp_c)
    // console.log("tomorrow min-temp:", responseJson.forecast.forecastday[1].day.mintemp_c)

    // console.log("after tomorrow text:", responseJson.forecast.forecastday[2].day.condition.text)
    // console.log("after tomorrow icon:", responseJson.forecast.forecastday[2].day.condition.icon)
    // console.log("after tomorrow max-temp:", responseJson.forecast.forecastday[2].day.maxtemp_c)
    // console.log("after tomorrow min-temp:", responseJson.forecast.forecastday[2].day.mintemp_c)
    displayData();
}


function displayData() {
    var cartona = "";
    cartona += `<div class="todayForecast card">
        <div class="card-footer d-flex justify-content-between">
            <small class="text-muted"></small>
            <small class="text-muted">${responseJson.location.localtime}</small>
        </div>
        <div class="card-body">
            <p class="text-muted">${responseJson.location.name}</p>
            <div class="degree text-white fw-bolder d-flex">
                <div class="num fs-1">${responseJson.current.temp_c}<span>&#8451;</span></div>
                <div class="icon px-5"><img src="https:${responseJson.current.condition.icon}"/></div>
            </div>
            <p class="text-info pt-5">${responseJson.current.condition.text}</p>
            <div class="d-flex">
                <p class="text-muted p-2">
                    <img src="images/icon-umberella.png" alt="">
                    20%
                </p>
                <p class="text-muted p-2">
                    <img src="images/icon-wind.png" alt="">
                    ${responseJson.current.wind_mph}m/h
                </p>
                <p class="text-muted p-2">
                    <img src="images/icon-compass.png" alt="">
                    ${responseJson.current.wind_dir}
                </p>
            </div>
        </div>
        </div>
        <div class="tommorrowForecast card">
        <div class="card-footer text-center">
            <small class="text-muted">${responseJson.forecast.forecastday[1].date}</small>
        </div>      
        <div class="card-body text-center">
            <div class="icon py-2 text-white"><img src="https:${responseJson.forecast.forecastday[1].day.condition.icon}"/></div>
            <div class="text-white num fs-4 py-2">${responseJson.forecast.forecastday[1].day.maxtemp_c}<span>&#8451;</span></div>
            <div class="text-white num fs-6 py-2">${responseJson.forecast.forecastday[1].day.mintemp_c}<span>&#8451;</span></div>
            <p class="text-info py-2">${responseJson.forecast.forecastday[1].day.condition.text}</p>
        </div>
        </div>
        <div class="afterTommorrowForecast card">
        <div class="card-footer text-center">
            <small class="text-muted">${responseJson.forecast.forecastday[1].date}</small>
        </div>
        <div class="card-body text-center">
            <div class="icon py-2 text-white"><img src="https:${responseJson.forecast.forecastday[2].day.condition.icon}"/></div>
            <div class="text-white num fs-4 py-2">${responseJson.forecast.forecastday[2].day.maxtemp_c} <span>&#8451;</span></div>
            <div class="text-white num fs-6 py-2">${responseJson.forecast.forecastday[2].day.mintemp_c} <span>&#8451;</span></div>
            <p class="text-info py-2">${responseJson.forecast.forecastday[2].day.condition.text}</p>
        </div>
        </div>
        `
    document.getElementById("current").innerHTML = cartona;
}
