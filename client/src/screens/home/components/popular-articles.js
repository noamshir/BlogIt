import React from 'react'
import { Container } from 'react-bootstrap'
import { ArticlePreview } from '../../../components/general/article-preview'
import { Text } from '../../../components/general/text'

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: 'Python - for beginners',
      user: {
        username: 'Dev IL',
        img: '',
      },
      readTime: '2 min read',
    },
    {
      id: 2,
      title: 'Hack your parents',
      user: {
        username: 'Kobe Lory',
        img: '',
      },
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Angular - Who needs dat?',
      user: {
        username: 'ReactIt',
        img: '',
      },
      readTime: '1 min read',
    },
    {
      id: 4,
      title: 'JS - 2022',
      user: {
        username: 'MDN',
        img: '',
      },
      readTime: '15 min read',
    },
    {
      id: 5,
      title: 'Node JS - single thread magic',
      user: {
        username: 'Harry Potter',
        img: '',
      },
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Sql Vs NoSql - Which is for you?',
      user: {
        username: 'Noam lok',
        img: '',
      },
      readTime: '2 min read',
    },
  ]
  return (
    <Container className='popular-articles-container'>
      <Text value='Popular on BlogIT' />
      <div className='popular-articles-list flex fw'>
        {articles.map((article) => {
          return <ArticlePreview article={article} />
        })}
      </div>
    </Container>
  )
}

export { PopularArticles }
