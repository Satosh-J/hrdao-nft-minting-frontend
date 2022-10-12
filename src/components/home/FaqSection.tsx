import { FC } from 'react'
import { Box, Grid, Typography, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    square
    elevation={0}
    {...props} />
))(() => ({
  background: 'none',
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '& .MuiAccordionSummary-expandIconWrapper': {
    padding: 15,
    background: 'white',
    borderRadius: '50%',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(135deg)',
    transitionDuration: '1s'
  },
  '& .MuiAccordionSummary-content': {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  transition: theme.transitions.create(['height', 'transform'], {
    duration: theme.transitions.duration.standard,
  })
}))

const FaqSection: FC = () => {
  return (
    <Box display='flex' justifyContent={'center'} py={10} px={1} bgcolor='#e8f2fc'>
      <Grid container spacing={5} maxWidth='lg' justifyContent='center' >
        <Grid item md={3} xs={12} >
          <Typography
            variant='h3'
            fontWeight={'bold'}
            fontFamily={'Georgia'}
            gutterBottom
          >
            Frequently asked questions
          </Typography>
          <Typography variant='body1'>
            If you have any other questions,
            feel free to ask them in our <Link href='https://discord.gg/m2cmgKBP' target={'_blank'}>Discord channel</Link> or
            send an email to admin@humanrightsdao.org
          </Typography>
        </Grid>
        <Grid item md={9} xs={12} >
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>Why start a Decentralised Autonomous Organisation (DAO) for Human Rights?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                Non-Governmental Organisations (NGOs) are the primary champions for human rights in our world today.
                They are, however, hamstrung by their funders and the whims of the sovereign nation-states
                who allow NGOs to operate within their jurisdictions (borders).
                The United Nations has repeatedly made it clear that avoiding angering some of its larger members is more important than standing up for human rights globally.
              </Typography>
              <Typography>
                We believe a decentralised, grass-roots collective of dedicated global citizens
                around the world can do better and catalyse more action than existing institutions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>
                How can I get involved?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                There are various ways you can get involved.
                If you&rsquo;d like to support the DAO financially,
                you can contribute to the crowdfunding raise here for a limited time only.
                Contributors will get a specialised UDHR NFT that signifies that they were a supporter at our beginning.
              </Typography>
              <Typography>
                If you&rsquo;d like to join as a campaigner, a developer, writer, designer
                — anything, please join our discord.
                <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}> HumanRightsDAO will pay people
                  for their contributions to campaigns, post fundraise.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>
                What can a DAO do that a not-for-profit can&rsquo;t?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                The potential of a DAO, can:
              </Typography>
              <Typography
                gutterBottom
              >
                - Increase the speed of large, pooled funds and donations
              </Typography>
              <Typography
                gutterBottom
              >
                - Democratise and involve both donors and members to vote in various aspects of
                a human rights campaign and ensure that all decisions,
                are left up to the people, not a board or secretariat.
              </Typography>
              <Typography
                gutterBottom
              >
                -Grow rapidly, across borders which can lead to influence and impact in areas
                that have historically been reserved for institutions or nations, on our behalf.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>
                What is UN Observer Status?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                There are various ways you can get invUnited Nations &lsquo;Permanent Observer Status&rsquo; is a title given to non-member states,
                international organisations and other entities, which enables limited participation in the United Nations General Assembly.
              </Typography>
              <Typography
                gutterBottom
              >
                Permanent observers are able to participate in the sessions and workings of the United Nations General Assembly,
                as well as maintain missions at the United Nations Headquarters in New York.
              </Typography>
              <Typography
                gutterBottom
              >
                A list of non-Member States, entities and organizations having received a standing invitation to participate
                as observers in the sessions and the work of the General Assembly can be found in <Link>A/INF/76/3</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>
                How do I mint the UDHR NFT?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                Minting of the NFT will be possible after the initial crowdfunding raise through JuiceboxDao.
                If you contribute on Juicebox, you will get a specialised NFT that signifies you were an early supporter.
                Following the fundraising, you will be able to mint the UDHR NFT on this site.
                Sign up to our newsletter and follow us on Twitter for updates.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight='bold' variant='h6' fontFamily={'Lato'}>
                Where will my donations go and how they will be used?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                gutterBottom
              >
                Donations to HumanRightsDAO will go to the DAO Treasury and will be be used to pay for
                the costs involved with running human rights campaigns and to pay our contributors.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FaqSection
