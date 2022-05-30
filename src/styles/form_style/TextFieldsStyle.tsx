import {Theme} from "@mui/material"
import { createStyles, makeStyles} from "@mui/styles";

const textFieldsStyle = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            color: 'primary'
        }
    })
)
export default textFieldsStyle