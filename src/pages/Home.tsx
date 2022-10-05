import { Container, ThemeProvider } from '@mui/material'
import HrAppBar from 'components/AppBar'
import { hrTheme } from 'helpers/theme'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <ThemeProvider theme={hrTheme}>
      <HrAppBar />
      <Container
        id='page-container'
      >
      </Container>
    </ThemeProvider>
  )
}

export default Home
