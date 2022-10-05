import { FC, memo } from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, IconButton } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import daoLogo from 'assets/humanrightsDAO.svg'
import twitterIcon from 'assets/akar-icons_twitter-fill.svg'
import discordIcon from 'assets/akar-icons_discord-fill.svg'


const HrAppBar: FC = memo(() => {

  return (
    <AppBar position="static"
      sx={{
        color: 'black',
        background: 'white',
        pt: 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src={daoLogo} />
          <Box flexGrow={1} />
          <Box display={{ xs: 'none', md: 'flex', alignItems: 'center', justifyContent: 'center' }} gap={1}>
            <IconButton aria-label="twitter"><img src={twitterIcon} /></IconButton>
            <IconButton aria-label="discord"><img src={discordIcon} /></IconButton>
            <Button >Documentation</Button>
            <Button >Contact Us</Button>
            <Button variant='outlined'>Mint</Button>
            <Button variant='contained'>Donate</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  )
}
)

export default HrAppBar
