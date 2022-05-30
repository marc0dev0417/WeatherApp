import { SxProps, Theme } from "@mui/material"

function randomColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

const cardContentStyle:SxProps<Theme> = {
    textAlign: 'center',
    backgroundColor: randomColor(),
    
   
}
export default cardContentStyle