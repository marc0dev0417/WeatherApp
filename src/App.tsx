import './App.css';

import { CssBaseline, ThemeProvider } from "@mui/material";

import ThemePage from '../src/components/viewmodels/ThemePage'

//Router to weather pages =>
import Router from './Router'
import { observer } from 'mobx-react';


 const App = () => {
    const theme = ThemePage.getInstance()

return(
  
    <ThemeProvider theme={theme.getTheme}> 
     <CssBaseline/>
      <Router/>
    </ThemeProvider>
   
)

 }
export default observer(App)


