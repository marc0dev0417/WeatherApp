
class SimpleData{
    lat: String = ""
    lon: String = ""
    temp?: Number = 0
    feels_like?: Number = 0
    temp_max?: Number = 0
    temp_min?: Number = 0
    pressure?: Number = 0
    humidity?: Number = 0
    icon?:String = ""
    

    constructor( lat: String,
        lon: String,
        temp?: Number,
        feels_like?: Number,
        temp_max?: Number,
        temp_min?: Number,
        pressure?: Number,
        humidity?: Number,
        icon?:String){
            
            this.lat = lat
            this.lon = lon
            this.temp = temp
            this.feels_like = feels_like
            this.temp_max = temp_max
            this.temp_min = temp_min
            this.pressure = pressure
            this.humidity = humidity
            this.icon = icon
    }
}

export default SimpleData