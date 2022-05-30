import {Theme} from "@mui/material"
import { createStyles, makeStyles} from "@mui/styles";  

const radioEffect = makeStyles((theme: Theme) =>
    createStyles({
        radio: {
            '&&:hover': {
                color: 'fuchsia'
            }
        }
    })
)
export default radioEffect