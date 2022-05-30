import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const typographyMenuItem = makeStyles((theme: Theme) =>
    createStyles({
        menuItem:{
            textAlign: 'center'
        }
    })
)
export default typographyMenuItem