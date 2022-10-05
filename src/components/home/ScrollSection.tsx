import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Button, Typography } from '@mui/material'
import { FC } from 'react'

import checkMark from 'assets/checkmark.svg'
import redScroll from 'assets/scroll-red.mp4'

const goals = [
  'Tangible human rights wins',
  '100 million people owning an NFT of the Universal Declaration of Human Rights',
  'United Nations Observer Status',
]

const ScrollSection: FC = () => {
  return (
    <Box display='flex' justifyContent={'center'}>
      <Grid container height='calc(100vh - 100px)' spacing={4} maxWidth='lg' justifyContent='center' alignItems={'center'}>
        <Grid item md={6} xs={12} >
          <Box>
            <Typography
              fontFamily='Georgia'
              fontStyle={'italic'}
              fontSize={38}
              fontWeight='bold'
              color='#eea600'
            >*Lanunching soon*</Typography>
            <Typography variant='h1'
              fontFamily='Georgia'
              fontSize={58}
              fontWeight='bold'
              gutterBottom
            >
              Human Rights DAO
            </Typography>
            <Typography
              gutterBottom
            >
              Fight against the largest human rights issues of our times,
              with a decentralised collective formed to fund,
              campaign and have impact.
              Campaign #1 - Stop the CCP persecution of Uyghurs, Tibet and Falung Gong.
            </Typography>

            <Typography
              gutterBottom
            >
              Our goals are to achieve:
            </Typography>
            <List>
              {
                goals.map((goal, i) => (
                  <ListItem key={i}>
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <img src={checkMark} />
                    </ListItemIcon>
                    <ListItemText
                      primary={goal}
                    />
                  </ListItem>
                ))
              }
            </List>
            <Box display='flex' width='100%' justifyContent={'space-evenly'}>
              <Button variant='contained'>Mint</Button>
              <Button variant='outlined'>Donate</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box display='flex' justifyContent={'center'} alignItems='center'>
            <video style={{ width: '100%' }} src={redScroll} autoPlay loop>
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ScrollSection
