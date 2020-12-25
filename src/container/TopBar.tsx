import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import MenuIcon from '@material-ui/icons/Menu'
import BackIcon from '@material-ui/icons/NavigateBefore'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import { useRouter } from 'next/router'
import React from 'react'

import { ToggleThemeContext } from '../theme'
import { DrawerWidth, ToggleDrawerContext } from './AppDrawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DrawerWidth}px)`,
        marginLeft: DrawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbarRight: {
      right: 0,
      position: 'absolute',
      paddingRight: '1%',
    },
  })
)

interface TopBarProps {
  title: string
  actionHamburger: boolean
}

export const TopBar: React.FC<TopBarProps> = ({ title, actionHamburger }) => {
  const { toggleDrawer } = React.useContext(ToggleDrawerContext)
  const { toggleTheme, isDark } = React.useContext(ToggleThemeContext)
  const router = useRouter()
  const classes = useStyles()

  const backToHome = (): void => {
    if (window && window.history.length > 2) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <AppBar elevation={1} position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={actionHamburger ? toggleDrawer : backToHome}
          className={classes.menuButton}
        >
          {actionHamburger ? <MenuIcon /> : <BackIcon />}
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.toolbarRight}>
          <Tooltip title="Toggle Theme">
            <Button variant="text" color="inherit" onClick={toggleTheme}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  )
}
