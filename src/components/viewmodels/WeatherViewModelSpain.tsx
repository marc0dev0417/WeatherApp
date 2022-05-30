import {action, computed, observable, makeObservable} from "mobx"
import SimpleData from "../models/SimpleData";

 class WeatherViewModelSpain{
    static instance: WeatherViewModelSpain

    @observable weatherHuesca: SimpleData = new SimpleData("42.1401",  "-0.408898")
    @observable weatherSpain: SimpleData = new SimpleData("40.416775", "-3.703790")
    @observable weatherMonzon: SimpleData = new SimpleData("41.9103", "0.194641")
     token: String = "54b2c8591af9fd68161f066916009311"
    
    
    constructor(){
        makeObservable(this)
    }

    static getInstance(): WeatherViewModelSpain{
        if(WeatherViewModelSpain.instance === undefined){
            WeatherViewModelSpain.instance = new WeatherViewModelSpain()
        }
        return WeatherViewModelSpain.instance
    }
    
    @action dataWeather = (lat:String, lon:String) => {
       
       return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.token}`, {
            method: "GET",
            redirect: "follow",
           })
              .then(response => response.json())
              .then(result => { 
                
                
                return new SimpleData(result.coord.lat, result.coord.lon, result.main.temp, result.main.feels_like, result.main.temp_max, result.main.temp_min, result.main.pressure, result.main.humidity, result.weather[0].icon)
                
            })
              .catch(error => console.log('error', error));  
    }
  
    
   @action getRequest = () => {
       this.dataWeather(this.weatherSpain.lat, this.weatherSpain.lon).then((object) => {
         this.weatherSpain! = object!     
       })
       this.dataWeather(this.weatherHuesca.lat, this.weatherHuesca.lon).then((object) =>{
           this.weatherHuesca! = object!
       })
       this.dataWeather(this.weatherMonzon.lat, this.weatherMonzon.lon).then((object) =>{
        this.weatherMonzon = object!
    })
   }
    @computed get getWeather(): SimpleData[]{
        return [this.weatherSpain, this.weatherHuesca, this.weatherMonzon]
    }
}
export default WeatherViewModelSpain