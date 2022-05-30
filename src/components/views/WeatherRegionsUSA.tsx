import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState} from "react";
import WeatherViewModelUSA from '../viewmodels/WeatherViewModelUSA'

//Style material UI =>
import CountryCity from "../../styles/html_native/FontHtml"

import containerStyle from "../../styles/table_style/ContainerStyle";
import tableCellStyle from "../../styles/table_style/TableCellStyle"

const WeatherRegionsUSA = () => {
  //Logic => 
    const viewModel = WeatherViewModelUSA.getInstance()
  //Style =>
    const styleContainer = containerStyle()
    const styleTableCell = tableCellStyle()

    const [list] = useState<String[]>(['USA', 'Hawaii', 'NewYork'])

    useEffect(() => {
        viewModel.getRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div> 
           <TableContainer  component={Paper} className={styleContainer.container}>
<Table  aria-label="simple table">
<TableHead >
  <TableRow >
    <TableCell  className={styleTableCell.cells}>Temperature</TableCell>
    <TableCell  className={styleTableCell.cells}>Feels Like</TableCell>
    <TableCell  className={styleTableCell.cells}>Temperature min</TableCell>
    <TableCell  className={styleTableCell.cells}>Temperature max</TableCell>
    <TableCell  className={styleTableCell.cells}>Pressure</TableCell>
    <TableCell  className={styleTableCell.cells}>Humidity</TableCell>
    <TableCell  className={styleTableCell.cells}>State</TableCell>
  </TableRow>
</TableHead>

{viewModel.getWeather.map((e, index) =>{
  
  return(
    <>
    <CountryCity>{list[index]}</CountryCity>
<TableBody>
<TableRow>
<TableCell  className={styleTableCell.cells}>{e.temp} Fº</TableCell>
<TableCell className={styleTableCell.cells}>{e.feels_like} Fº</TableCell>
<TableCell className={styleTableCell.cells}>{e.temp_min} Fº</TableCell>
<TableCell className={styleTableCell.cells}>{e.temp_max} Fº</TableCell>
<TableCell className={styleTableCell.cells}>{e.pressure} hPa</TableCell>
<TableCell className={styleTableCell.cells}>{e.humidity} Fº</TableCell>
<TableCell className={styleTableCell.cells}><img src={`http://openweathermap.org/img/w/${e.icon}.png`} alt={''}></img></TableCell>
</TableRow>

</TableBody>
</>
)})}


</Table>
</TableContainer>
        </div>
    )
}
export default observer(WeatherRegionsUSA)