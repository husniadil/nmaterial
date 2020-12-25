import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { ToggleThemeContext } from '../theme'

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: '0',
    lineHeight: '1.15',
    fontSize: '4rem',
    '& > a': {
      color: '#0070f3',
      textDecoration: 'none',
    },
    '& > a:hover, & > a:focus, & > a:active': {
      textDecoration: 'underline',
    },
  },
  description: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },
  code: {
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
    marginTop: '3rem',
    '@media (max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
    },
  },
  card: {
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
    '& > h3': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& > p': {
      margin: '0',
      fontSize: '1.25rem',
      lineHeight: '1.5',
    },
  },
  footer: {
    width: '100%',
    height: '100px',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > img': {
      marginLeft: '0.5rem',
    },
    '& > a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  logo: {
    height: '1em',
  },
  logoDark: {
    height: '1em',
    webkitFilter: 'invert(1)',
    filter: 'invert(1)',
  },
})

export const HomeJSS: React.FC = () => {
  const { isDark } = React.useContext(ToggleThemeContext)
  const classes = useStyles()

  return (
    <>
      <div className={classes.container}>
        <main className={classes.main}>
          <h1 className={classes.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={classes.description}>
            Get started by editing <code className={classes.code}>pages/index.js</code>
          </p>

          <div className={classes.grid}>
            <a href="https://nextjs.org/docs" className={classes.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={classes.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href="https://github.com/vercel/next.js/tree/master/examples" className={classes.card}>
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={classes.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </main>

        <footer className={classes.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={isDark ? classes.logoDark : classes.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}

export default HomeJSS
