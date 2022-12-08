import { HomeHero } from './components/home-hero'
import { PopularArticles } from './components/popular-articles'

const Home = () => {
  return (
    <div className='home-screen'>
      <HomeHero />
      <PopularArticles />
    </div>
  )
}

export { Home }
