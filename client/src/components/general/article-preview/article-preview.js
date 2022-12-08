import React from 'react'
import { UserImage } from '../user-image'
const ArticlePreview = ({ article }) => {
  const ArticlePreviewHeader = ({ user }) => {
    return (
      <header className='article-preview-header flex aic'>
        <UserImage src={user.img} />
        <p className='username'>{user.name}</p>
      </header>
    )
  }

  const { user, title, readTime } = article
  return (
    <div className='article-preview flex-col'>
      <ArticlePreviewHeader user={user} />
      <h1 className='article-preview-title'>{title}</h1>
      <footer className='article-preview-footer'>{readTime}</footer>
    </div>
  )
}

export { ArticlePreview }
