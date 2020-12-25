import CssBaseline from '@material-ui/core/CssBaseline'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'

import { AppDrawerProvider } from './AppDrawer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(2, 0, 0, 0),
    },
  })
)

export const AppContainer: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppDrawerProvider>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </AppDrawerProvider>
    </div>
  )
}

export default AppContainer
