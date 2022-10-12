import { FC } from 'react'
import Page from 'components/Page'
import ScrollSection from 'components/home/ScrollSection'
import AimGoalSection from 'components/home/AimGoalSection'
import FaqSection from 'components/home/FaqSection'


const Home: FC = () => {
  return (
    <Page>
      <ScrollSection />
      <AimGoalSection />
      <FaqSection />
    </Page>
  )
}

export default Home
