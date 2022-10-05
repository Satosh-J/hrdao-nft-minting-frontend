import { Container, ThemeProvider, Box } from '@mui/material'
import HrAppBar from 'components/AppBar'
import { hrTheme } from 'helpers/theme'
import { FC, ReactNode } from 'react'

type ParentPgContainerProps = {
  children: ReactNode
};

const Page: FC<ParentPgContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={hrTheme}>
      <>
        <HrAppBar />
        <Box height={90} />
        <Container maxWidth={false}>
          {children}
        </Container>
      </>
    </ThemeProvider>
  )
}

export default Page
