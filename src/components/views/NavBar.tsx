import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  MenuItem,
  Menu

} from '@mui/material'

import { Brightness7, Brightness4 } from '@mui/icons-material'

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ThemePage from '../viewmodels/ThemePage'

//Styles =>
import typographyStyle from '../../styles/navbar_style/TypographyStyle'
import boxNavStyle from '../../styles/navbar_style/BoxNavStyle'
import menuNavAnchor from '../../styles/navbar_style/MenuNavAnchor'
import menuNavTransform from '../../styles/navbar_style/MenuNavTransform'
import menuAppBarStyle from '../../styles/navbar_style/MenuAppBarStyle'
import buttonNavStyle from '../../styles/navbar_style/ButtonNavStyle'
import buttonColor from '../../styles/navbar_style/ColorButton'


const NavBar = () => {

  const theme = ThemePage.getInstance()

  const navigate = useNavigate()

  const pages = ['Spain', 'USA', 'Form', 'Datas']

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("funciona")
  };

  const routesPage = (page: String) => {
    switch (page) {
      case 'Spain': navigate('/page_spain')
        break

      case 'USA': navigate('/page_usa')
        break

      case 'Form': navigate('/page_form')
        break

      case 'Datas': navigate('/page_visual')
        break
    }
  }
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={typographyStyle}
            >
              Weather App
            </Typography>

            <Box sx={boxNavStyle}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >

              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={menuNavAnchor}
                keepMounted
                transformOrigin={menuNavTransform}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={menuAppBarStyle}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, marginRight: 8 }}>
              {pages.map((page) => (
                <Button

                  key={page}
                  onClick={(event) => {
                    routesPage(page)
                  }}
                  sx={buttonNavStyle}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton sx={{ mr: 1 }} onClick={theme.toggleColorMode} color="inherit">
              {theme.mode === 'dark' ? <Brightness7 sx={{ mr: 5 }} /> : <Brightness4 sx={{ mr: 5 }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default NavBar