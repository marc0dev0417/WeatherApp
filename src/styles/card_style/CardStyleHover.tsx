import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const cardStyleHover = makeStyles((theme: Theme) => 
    createStyles({
        card:{
            '&:hover':{
                transform: 'scale(1.1)',
                border: '0px',
            }
        }
    }))

export default cardStyleHover