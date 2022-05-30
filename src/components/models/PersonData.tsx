class PersonData{
    name?: String
    lastname?: String
    age?: Number
    password?: String
    gender?: String

    constructor(name?:String, lastname?:String, age?:Number, password?:String, gender?:String){
            this.name = name
            this.lastname = lastname
            this.age = age
            this.password = password
            this.gender = gender
    }
}
export default PersonData