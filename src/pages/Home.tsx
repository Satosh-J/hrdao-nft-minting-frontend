import { FC } from 'react'
import Page from 'components/Page'
import ScrollSection from 'components/home/ScrollSection'
import AimGoalSection from 'components/home/AimGoalSection'


const Home: FC = () => {
  return (
    <Page>
      <ScrollSection />
      <AimGoalSection />
    </Page>
  )
}

export default Home
