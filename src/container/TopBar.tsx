import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import BackIcon from '@material-ui/icons/NavigateBefore'
import { useRouter } from 'next/router'
import React from 'react'

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
  })
)

interface TopBarProps {
  title: string
  actionHamburger: boolean
}

export const TopBar: React.FC<TopBarProps> = ({ title, actionHamburger }) => {
  const { toggleDrawer } = React.useContext(ToggleDrawerContext)
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
      </Toolbar>
    </AppBar>
  )
}
