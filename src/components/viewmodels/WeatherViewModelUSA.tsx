import {action, computed, observable, makeObservable} from "mobx"
import SimpleData from "../models/SimpleData";

 class WeatherViewModelUSA{
    static instance: WeatherViewModelUSA

    @observable weatherUSA: SimpleData = new SimpleData("44.182205",  "-84.506836")
    @observable weatherHawaii: SimpleData = new SimpleData("19.741755", "-155.844437")
    @observable weatherNewYork: SimpleData = new SimpleData("43.000000", "-75.000000")
     
    token: String = "54b2c8591af9fd68161f066916009311"
    
    
    constructor(){
        makeObservable(this)
    }

    static getInstance(): WeatherViewModelUSA{
        if(WeatherViewModelUSA.instance === undefined){
            WeatherViewModelUSA.instance = new WeatherViewModelUSA()
        }
        return WeatherViewModelUSA.instance
    }
    
    @action dataWeather = (lat:String, lon:String) => {
       
       return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.token}`, {
            method: "GET",
            redirect: "follow",
           })
              .then(response => response.json())
              .then(result => { 
                console.log(result)
                return new SimpleData(result.coord.lat, result.coord.lon, result.main.temp, result.main.feels_like, result.main.temp_max, result.main.temp_min, result.main.pressure, result.main.humidity, result.weather[0].icon)
                
            })
              .catch(error => console.log('error', error));  
    }
   @action getRequest = () => {
       this.dataWeather(this.weatherHawaii.lat, this.weatherHawaii.lon).then((object) => {
         this.weatherHawaii! = object!     
       })
       this.dataWeather(this.weatherUSA.lat, this.weatherUSA.lon).then((object) =>{
           this.weatherUSA! = object!
       })
       this.dataWeather(this.weatherNewYork.lat, this.weatherNewYork.lon).then((object) =>{
        this.weatherNewYork = object!
    })
   }
    @computed get getWeather(): SimpleData[]{
        return [this.weatherUSA, this.weatherHawaii, this.weatherNewYork]
    }
}
export default WeatherViewModelUSA