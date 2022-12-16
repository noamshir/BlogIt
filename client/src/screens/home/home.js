import React from 'react'
import { Container } from 'react-bootstrap'

import { ArticlesList } from '../../components/general/articles-list'
import { HomeHero } from './components/home-hero'
import { PopularArticles } from './components/popular-articles'
import { Sidebar } from './components/side-bar'

const Home = () => {
  const renderUserNotLoggedTopScreen = () => {
    return (
      <React.Fragment>
        <HomeHero />
        <PopularArticles />
        <hr />
      </React.Fragment>
    )
  }

  const isUserLogged = false
  return (
    <div className='home-screen'>
      {!isUserLogged && renderUserNotLoggedTopScreen()}
      <Container>
        <main className='home-screen-mc'>
          <ArticlesList fullPreview />
          <Sidebar />
        </main>
      </Container>
    </div>
  )
}

export { Home }
