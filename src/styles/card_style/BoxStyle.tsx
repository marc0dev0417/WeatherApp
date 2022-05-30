import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const boxStyle = makeStyles((theme: Theme) => 

    createStyles({
        boxCard: {
            marginTop: '80px',
            display: 'flex',
            flex: 'center',
            justifyContent: 'center'
        }
    }))

export default boxStyle