import {Theme} from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles";

const labelStyle = makeStyles((theme: Theme) => 
    createStyles({
        formLabel:{
            textAlign: 'center',
            color: 'gray'
        }
    })
)

export default labelStyle