let inputcity = document.getElementById("inputcity")
let getweather = document.getElementById("getweather")
let cityname = document.getElementById("cityname")
let temperature = document.getElementById("temperature")
let description = document.getElementById("description")
getweather.addEventListener("click",()=>{
    let city=inputcity.value;
    if(city){
        WeatherApi(city)
    }else{
        alert("please enter the city name ")
    }
})
async function WeatherApi(city){
    try{
        let apikey= "4204ff5e46ce4852aa0046629306417a"
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        let data=await fetch(apiurl)
        console.log(data);
        data=await data.json();
        if(data.cod===200){
            cityname.innerHTML=`weather in ${data.name},${data.sys.country} `
            temperature.innerHTML=`temperature in ${data.main.temp} `
            description.innerHTML=`description in ${data.weather[0].description} `
        }else{
            alert("city is not found")
        }
    }
    catch(error){
        ("Error occupied:please try again later",error)
    }
    

}

