import React from 'react'
import { ArticlePreview } from '../article-preview'

const ArticlesList = ({ fullPreview = false, ...props }) => {
  const articles = [
    {
      id: 1,
      title: 'Python - for beginners',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'Dev IL',
        img: '',
      },
      readTime: '2 min read',
      src: '',
    },
    {
      id: 2,
      title: 'Hack your parents',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'Kobe Lory',
        img: '',
      },
      readTime: '5 min read',
      src: '',
    },
    {
      id: 3,
      title: 'Angular - Who needs dat?',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'ReactIt',
        img: '',
      },
      readTime: '1 min read',
      src: '',
    },
    {
      id: 4,
      title: 'JS - 2022',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'MDN',
        img: '',
      },
      readTime: '15 min read',
      src: '',
    },
    {
      id: 5,
      title: 'Node JS - single thread magic',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'Harry Potter',
        img: '',
      },
      readTime: '4 min read',
      src: '',
    },
    {
      id: 6,
      title: 'Sql Vs NoSql - Which is for you?',
      subText: 'Why breakthrough technologies need to be accessible',
      user: {
        username: 'Noam lok',
        img: '',
      },
      readTime: '2 min read',
      src: '',
    },
  ]
  return (
    <div className='articles-list' {...props}>
      {articles.map((article) => {
        return (
          <ArticlePreview
            article={article}
            fullPreview={fullPreview}
            key={article.id}
          />
        )
      })}
    </div>
  )
}

export { ArticlesList }
