import { FC, memo } from 'react'
import { Button, Box, Typography, TextField } from '@mui/material'
import { Slide } from 'react-awesome-reveal'


const SubscribeForm: FC = memo(() => {

  return (
    <Box
      my={10}
      mx='auto'
      width={400}
    >
      <Slide direction='up' triggerOnce>

        <Typography color='white' fontWeight='bold' gutterBottom variant='h5'>Subscribe to our newsletter</Typography>
        <Typography color='white' gutterBottom fontSize='0.9rem'>Add your name and email below to stay in the loop.</Typography>
        <TextField
          variant='outlined'
          label='Name'
          fullWidth
          aria-label='subscriber-name'
          inputProps={{
            style: {
              color: 'white',
            }
          }}
          sx={{
            my: 2,
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': { borderColor: 'orange' },
            },
            '& fieldset': {
              borderRadius: 10,
              borderColor: 'white'
            },
            '& label': {
              color: 'white'
            }
          }}
        />
        <TextField
          variant='outlined'
          label='Email'
          fullWidth
          aria-label='subscriber-email'
          inputProps={{
            style: {
              color: 'white',
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': { borderColor: 'orange' },
            },
            '& fieldset': {
              borderRadius: 10,
              borderColor: 'white'
            },
            '& label': {
              color: 'white'
            }
          }}
        />
        <Button
          sx={{
            my: 2
          }}
          variant='contained'
          color='yellow'
        >
          Submit
        </Button>
      </Slide>
    </Box>
  )
}
)

export default SubscribeForm
