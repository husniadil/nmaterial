import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles({
  backToHomepage: {
    margin: '0',
    lineHeight: '1.15',
    '& > a': {
      color: '#0070f3',
      textDecoration: 'none',
    },
    '& > a:hover, & > a:focus, & > a:active': {
      textDecoration: 'underline',
    },
  },
})

interface ErrorBoxProps {
  statusCode: number
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({ statusCode }) => {
  const classes = useStyles()

  let message: string
  switch (statusCode) {
    case 404:
      message = 'Sorry the page you requested was not found.'
      break
    default:
      message = 'An error has occurred.'
      break
  }
  return (
    <>
      <Container>
        <Typography paragraph>{message}</Typography>
        <Typography paragraph className={classes.backToHomepage}>
          <Link href="/">
            <a>Back to Homepage</a>
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default ErrorBox
