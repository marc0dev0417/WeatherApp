import {action, computed, observable, makeObservable} from "mobx"
import PersonData from "../models/PersonData"

class FormViewModel{
    static instance: FormViewModel

    @observable arrayPerson: PersonData[] = []

    constructor(){
        makeObservable(this)
    }

    static getInstance(): FormViewModel{
        if(FormViewModel.instance === undefined){
            FormViewModel.instance = new FormViewModel()
        }
        return FormViewModel.instance
    }
    
 @action addItem = (person:PersonData) => {
     this.arrayPerson = JSON.parse(localStorage.arrayPerson)

     this.arrayPerson.push(person)

     localStorage.setItem('arrayPerson', JSON.stringify(this.arrayPerson))
 }
 @computed get getArrayLocalStorage(): PersonData[]{

    console.log(JSON.parse(localStorage.arrayPerson))
        return JSON.parse(localStorage.arrayPerson)
}
}

export default FormViewModel