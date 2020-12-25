import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import NextIcon from '@material-ui/icons/HomeWork'
import AboutIcon from '@material-ui/icons/Info'
import Link from 'next/link'
import React from 'react'

import Logo from './Logo'

export const ToggleDrawerContext = React.createContext({
  toggleDrawer: () => {
    console.log()
  },
})

export const DrawerWidth = 300

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: DrawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: DrawerWidth,
    },
  })
)

export const AppDrawerProvider: React.FC = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const toggleDrawer = React.useCallback(() => {
    setMobileOpen(!mobileOpen)
  }, [mobileOpen])

  const noop = (): void => console.log()

  const drawer = (autoClose: boolean): React.ReactNode => (
    <div>
      <Logo />
      <Divider />
      <List>
        <Link href="/">
          <a>
            <ListItem button onClick={autoClose ? toggleDrawer : noop}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </a>
        </Link>
        <Link href="/home/jss">
          <a>
            <ListItem button onClick={autoClose ? toggleDrawer : noop}>
              <ListItemIcon>
                <NextIcon />
              </ListItemIcon>
              <ListItemText primary="Home with JSS" />
            </ListItem>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <ListItem button onClick={autoClose ? toggleDrawer : noop}>
              <ListItemIcon>
                <AboutIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </a>
        </Link>
      </List>
    </div>
  )

  return (
    <ToggleDrawerContext.Provider
      value={{
        toggleDrawer,
      }}
    >
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer(true)}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer(false)}
          </Drawer>
        </Hidden>
      </nav>
      {children}
    </ToggleDrawerContext.Provider>
  )
}
