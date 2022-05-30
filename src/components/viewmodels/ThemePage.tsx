import {action, computed, observable, makeObservable} from 'mobx'
import  createTheme  from '@mui/material/styles/createTheme';


class ThemePage{

        static themeLight = createTheme({
            palette: {
              mode: 'light'
            }
        })

        static themeDark = createTheme({
            palette:{
               mode: 'dark'
            }
        })

    static instance: ThemePage

    @observable mode = 'light'
    @observable theme = ThemePage.themeLight

   constructor(){
       makeObservable(this)
   }
   static getInstance(): ThemePage{
        if(ThemePage.instance === undefined){
            ThemePage.instance = new ThemePage()
        }
        return ThemePage.instance
   }
   @action toggleColorMode = () => {
    if(this.mode === 'dark'){
        this.mode = 'light'
    }else{
        this.mode = 'dark'
    }
     this.switchTheme()
   }

   @action switchTheme = () => {
      if(this.mode === 'dark'){
          this.theme = ThemePage.themeDark
      }else{
          this.theme = ThemePage.themeLight
      } 
   }
   @computed get getTheme(){
       return this.theme
   }
}
export default ThemePage