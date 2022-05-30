import React, {useState, useEffect} from "react";

//Material ui =>

import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

import WeatherViewModelSpain from "../viewmodels/WeatherViewModelSpain";

import { TableBody, Table, TableHead, Paper, Box } from "@mui/material";
import { TableContainer } from "@mui/material";

import { observer } from "mobx-react-lite";


//Style material UI =>
import CountryCity from "../../styles/html_native/FontHtml"
import containerStyle from "../../styles/table_style/ContainerStyle"
import tableCellStyle from "../../styles/table_style/TableCellStyle"
import boxTableStyle from "../../styles/table_style/BoxTableStyle";

const WeatherRegionsSpain = () => {
    const viewModel = WeatherViewModelSpain.getInstance()
    const [listCity] = useState<String[]>(['Spain','Huesca', 'Monzon'])

    const styleContainer = containerStyle()
    const styleTableCell = tableCellStyle()
    const styleBoxTable = boxTableStyle()

    useEffect(() =>{ 
       viewModel.getRequest()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
return(
    <div> 
      <Box className={styleBoxTable.boxStyle}>
    <TableContainer component={Paper} className={styleContainer.container}>
    
<Table  aria-label="simple table">
<TableHead >
  <TableRow >
    <TableCell className={styleTableCell.cells}>Temperature</TableCell>
    <TableCell className={styleTableCell.cells}>Feels Like</TableCell>
    <TableCell className={styleTableCell.cells}>Temperature min</TableCell>
    <TableCell className={styleTableCell.cells}>Temperature max</TableCell>
    <TableCell className={styleTableCell.cells}>Pressure</TableCell>
    <TableCell className={styleTableCell.cells}>Humidity</TableCell>
    <TableCell className={styleTableCell.cells}>State</TableCell>
  </TableRow>
</TableHead>

{viewModel.getWeather.map((e, index) =>{
  
  return(
    <>
   <CountryCity>{listCity[index]}</CountryCity>
<TableBody>
<TableRow>
<TableCell  className={styleTableCell.cells}>{e.temp} Fº</TableCell>
<TableCell  className={styleTableCell.cells}>{e.feels_like} Fº</TableCell>
<TableCell  className={styleTableCell.cells}>{e.temp_min} Fº</TableCell>
<TableCell  className={styleTableCell.cells}>{e.temp_max} Fº</TableCell>
<TableCell  className={styleTableCell.cells}>{e.pressure} hPa</TableCell>
<TableCell  className={styleTableCell.cells}>{e.humidity} %</TableCell>
<TableCell  className={styleTableCell.cells}><img src={`http://openweathermap.org/img/w/${e.icon}.png`} alt=''></img></TableCell>
</TableRow>

</TableBody>
</>
)})}
</Table>
</TableContainer>
</Box>
</div>
)
}

export default observer(WeatherRegionsSpain)