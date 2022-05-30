import { CardContent, Typography, Card, Box } from "@mui/material";
import { observer } from "mobx-react-lite";

import FormViewModel from "../viewmodels/FormViewModel";

//Styles
import cardContentStyle from "../../styles/card_style/CardContentStyle"
import typographyInitialCard from "../../styles/card_style/TypographyInitialCard";
import typographyMarginBottom from "../../styles/card_style/TypographyMarginBottom";
import boxStyle from "../../styles/card_style/BoxStyle";
import cardStyleHover from "../../styles/card_style/CardStyleHover"

const VisualDataUser = () => {

  const formViewModel = FormViewModel.getInstance()

  const styleBox = boxStyle()
  const cardStyleEfect = cardStyleHover()

  return (
    <div>
      {
        formViewModel.getArrayLocalStorage.map((e, index) => {
          return (
            <Box className={styleBox.boxCard}>
            <Card elevation={1} style={{width: '300px'}} className={cardStyleEfect.card}>
              <CardContent sx={cardContentStyle} >
                <Typography sx={typographyInitialCard} color='text.secondary' gutterBottom>
                  {index + 1}
                </Typography>
                <Typography variant="h5" component="div" >
                  {e.name}
                </Typography>
                <Typography sx={typographyMarginBottom} color="text.secondary">
                  {e.lastname}
                </Typography>
                <Typography variant="body2">
                  {e.age}
                  <br />
                  {e.gender}
                </Typography>
              </CardContent>
            </Card>
            </Box>
          )
        })
      }

    </div>
  )
}
export default observer(VisualDataUser)