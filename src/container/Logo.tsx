import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import React from 'react'

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
  const classes = useStyles()

  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Link href="/">
              <a>
                <img
                  src="/icons/apple-touch-icon.png"
                  width="25px"
                  height="25px"
                  alt={APP_NAME}
                  style={{ verticalAlign: 'bottom' }}
                />
              </a>
            </Link>
          </ListItemIcon>
          <ListItemText primary={<h2 className={classes.brand}>{APP_NAME}</h2>} />
        </ListItem>
      </List>
    </>
  )
}

export default Logo
