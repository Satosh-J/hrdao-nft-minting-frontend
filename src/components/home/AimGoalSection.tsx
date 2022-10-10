import { FC } from 'react'
import { Box, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import SubscribeForm from './SubscribeForm'
import { Slide } from 'react-awesome-reveal'


const AimGoalSection: FC = () => {
  return (
    <Box
      display='flex'
      justifyContent={'center'}
      sx={{
        bgcolor: '#242549'
      }}
      py={15}
    >
      <Container maxWidth='md'>
        <Slide direction='up' triggerOnce>

          <Typography
            variant='h2'
            textAlign={'center'}
            fontFamily='Georgia'
            // fontSize={38}
            fontWeight='bold'
            color='white'
            my={3}
          >
            Our Aims and Goals
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            On the 10th of December, 1948 we achieved what could be the greatest moral milestone in the history of our species.
          </Typography>
          <Typography
            fontFamily='Lato'
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            my={2}
          >
            Representatives of various countries and cultures from all around the world came together
            and declared that every human being,
            no matter who they are
            , where they are from
            , or who they pray to, are entitled to a set of basic rights.
            We collectively agreed that all human beings deserve the chance to live a meaningful life.
          </Typography>
          <Typography
            my={2}
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontWeight='bold'
            fontFamily='Lato'
          >
            These values were enshrined in the Universal Declaration of Human Rights (UDHR).
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            my={2}
            fontFamily='Lato'
          >
            What makes this such a remarkable achievement is that it was not the work of
            a particular religion, a divine proclamation saying this should be, and thus
            carried out by perhaps begrudging acolytes. This thunderous moral act was
            the work of flawed human beings who came together and collectively agreed that
            all human beings are entitled to a set of rights and that it is only upon this as a foundation,
            can we live in a world of freedom, justice, and peace.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            While they not be perfect in practise, they are essential in
            principle as the foundation to attain fulfilment in life,
            a yardstick leaders across the world can be measured against.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            In our world today, billions of people still have their human rights
            denied to them. Nation-states put geopolitical concerns ahead of human rights.
            This isn’t limited to countries run by despots and dictators,
            but some of the most prosperous countries in the world.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            Non-Governmental Organisations (NGO’s), while perhaps having the best intentions,
            are restricted by their sponsors and organisational politics and bureaucracy.
            They are constrained from doing the very thing they exist to do, defend human rights.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
            fontWeight='bold'
          >
            In many ways, the fight for human rights seems to have stalled.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            The world has changed dramatically over the past few decades,
            perhaps more so than the entire of the 20th Century.
            Billions of people now have access to the Internet, the library of the world,
            that connects each of us to each other as well as the total body of accumulated knowledge in science and culture.
            The borders that once divided us are now easily broached by the connectivity that the Internet brings to society.
            Our shared humanity is now on display, accessible through super-computing panes of glass that fit in our hands.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            With the rise of the next generation of the internet, referred to as Web3,
            new forms of social organisation are now possible.
            We have entirely new ways to bring about change and secure human rights for all.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
            fontWeight='bold'
          >
            In light of the tremendous potential the confluence of technologies
            available to us present us with, HumanRightsDAO has formed.
            HumanRightsDAO is a decentralised collective to fund,
            campaign and defend human rights for people around the world.
            In collaboration with insiders from the largest Human Rights organisations
            in the world and those with lived experience.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            In light Our hope is that, empowered by the new technologies available to us
            we can affect change in ways that hasn’t been possible to date —
            to secure human rights for all around the world — borders be damned.
            rld and those with lived experience.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
            fontWeight='bold'
          >
            Our initial goals are to:
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            - Attain Observer Status at the United Nations
            - Have 100 million holders of the Universal Declaration of Human Rights NFT by 2024
            - Fund and run campaigns to achieve measurable human rights wins
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
          >
            ‍
            HumanRightsDAO is an experiment in how our new technological capabilities,
            combined with passion and the desire to make the world a better place distributed across the world,
            can have real impact.If this strikes a chord, we’d love to have you on board, in whatever capacity.
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
            fontWeight='bold'
          >
            Join us:
          </Typography>
          <Typography
            gutterBottom
            textAlign='center'
            color='white'
            fontSize={18}
            fontFamily='Lato'
            my={2}
            fontStyle='italic'
          >
            For more information on HumanRightsDAO, read our &nbsp;
            <Link
              href='https://www.notion.so/HumanRightsDAO-Documentation-1e0280e1e1ee4aa5bf78aa1a4c50f5dd'
              rel='noreferrer'
              target={'_blank'}
              color='inherit'>
              documentation
            </Link>.
            Follow us on &nbsp;
            <Link
              href='https://twitter.com/RightsDAO'
              rel='noreferrer'
              target={'_blank'}
              color='inherit'>
              Twitter
            </Link>
            &nbsp;and subscribe to our newsletter below for updates.
          </Typography>
        </Slide>
        <SubscribeForm />
      </Container>
    </Box>
  )
}

export default AimGoalSection
