import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const tableCells = makeStyles((theme: Theme) =>
    createStyles({
        cells: {
            align: 'center'
        }
    })
)
export default tableCells