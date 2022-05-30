import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const appBar = makeStyles((theme: Theme) =>
        createStyles({
                appBar:{
                    position: 'static'
                }
        })
)
export default appBar