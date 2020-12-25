import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import Head from 'next/head'
import React from 'react'

import { ToggleThemeContext } from '../src/theme'
import { APP_DESCRIPTION, APP_NAME } from '../src/types/constants'
import styles from '../styles/Home.module.css'

export const Home: React.FC = () => {
  const { toggleTheme, isDark } = React.useContext(ToggleThemeContext)

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{APP_NAME}</title>
          <meta name="description" content={APP_DESCRIPTION} />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            <Tooltip title="Toggle Theme">
              <Button variant="text" color="inherit" onClick={toggleTheme}>
                {isDark ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Tooltip>
          </h1>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={isDark ? styles.logoDark : styles.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
