import {Theme} from "@mui/material"
import { createStyles, makeStyles} from "@mui/styles";  

const gridStyles = makeStyles((theme: Theme) => 
    createStyles({
        root:{
            marginTop: '20px',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: "column"
        }
    })
)
export default gridStyles