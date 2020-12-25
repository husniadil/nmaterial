import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import React from 'react'

import { ToggleThemeContext } from '../theme'
import { APP_NAME } from '../types/constants'

const useStyles = makeStyles({
  brand: {
    fontWeight: 'bold',
    fontSize: '1rem',
    margin: 0,
    padding: 0,
  },
})

const Logo: React.FC = () => {
  const { toggleTheme, isDark } = React.useContext(ToggleThemeContext)
  const classes = useStyles()

  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <img
              src="/icons/apple-touch-icon.png"
              width="25px"
              height="25px"
              alt={APP_NAME}
              style={{ verticalAlign: 'bottom' }}
            />
          </ListItemIcon>
          <ListItemText primary={<h1 className={classes.brand}>{APP_NAME}</h1>} />
          <ListItemIcon>
            <Tooltip title="Toggle Theme">
              <Button variant="text" color="inherit" onClick={toggleTheme}>
                {isDark ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  )
}

export default Logo
