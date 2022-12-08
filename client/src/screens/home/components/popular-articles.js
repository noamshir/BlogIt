import React from 'react'
import { Container } from 'react-bootstrap'
import { ArticlePreview } from '../../../components/general/article-preview'

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Python - for beginners',
      user: {
        name: 'Dev IL',
        img: '',
      },
      readTime: '2 min read',
    },
    {
      id: 2,
      title: 'Hack your parents',
      user: {
        name: 'Kobe Lory',
        img: '',
      },
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Angular - Who needs dat?',
      user: {
        name: 'ReactIt',
        img: '',
      },
      readTime: '1 min read',
    },
    {
      id: 4,
      title: 'JS - 2022',
      user: {
        name: 'MDN',
        img: '',
      },
      readTime: '15 min read',
    },
    {
      id: 5,
      title: 'Node JS - single thread magic',
      user: {
        name: 'Harry Potter',
        img: '',
      },
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Sql Vs NoSql - Which is for you?',
      user: {
        name: 'Noam lok',
        img: '',
      },
      readTime: '2 min read',
    },
  ]
  return (
    <Container className='popular-articles-container'>
      <p>Popular on BlogIT</p>
      <div className='popular-articles-list flex fw'>
        {articles.map((article) => {
          return <ArticlePreview article={article} />
        })}
      </div>
    </Container>
  )
}

export { PopularArticles }
