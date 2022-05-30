import {Theme} from "@mui/material"
import { makeStyles, createStyles} from "@mui/styles";

const containerStyle = makeStyles((theme: Theme) =>
    createStyles({
        container:{
            height: '100%'
        }
    })
)
export default containerStyle