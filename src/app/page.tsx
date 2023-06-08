import Jumbotron from '@/components/home/jumbotron/jumbotron'
import Support from '@/components/home/support/support'
import Opportunity from '@/components/home/opportunity/opportunity'
import HomeStyle from './style'

const Home = () => (
  <div className={HomeStyle.Container}>
    <Jumbotron />
    <Support />
    <Opportunity />
  </div>
)

export default Home
