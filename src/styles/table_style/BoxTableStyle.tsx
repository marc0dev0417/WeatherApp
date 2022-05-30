import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const boxTableStyle = makeStyles((theme: Theme) =>
    createStyles({
        boxStyle:{
            display: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',

           
        }
    }))

export default boxTableStyle