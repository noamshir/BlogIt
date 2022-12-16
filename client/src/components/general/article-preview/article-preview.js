import React from 'react'
import { Text } from '../text'
import { UserImage } from '../user-image'
const ArticlePreview = ({ article, fullPreview = false }) => {
  const ArticlePreviewHeader = ({ user }) => {
    return (
      <header className='article-preview-header flex aic'>
        <UserImage src={user.img} link={true} />
        <Text className='username' value={user.username} />
      </header>
    )
  }

  const { user, title, readTime, subText } = article
  const fullPreviewClass = fullPreview ? 'full-preview' : ''

  return (
    <div className={`article-preview flex ${fullPreviewClass}`}>
      <div className='flex-col jcc'>
        <ArticlePreviewHeader user={user} />
        <h1 className='article-preview-title'>{title}</h1>
        <Text className='light' value={subText} />
        <footer className='article-preview-footer'>{readTime}</footer>
      </div>
      {fullPreview && (
        <div className='article-preview-img-container flex aic'>
          <img
            className='preview-img'
            src='https://th-thumbnailer.cdn-si-edu.com/RyYkOGfvbsUBReELYWAdHtUvNBc=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6f/5b/6f5bf6b9-f4a5-4109-9375-e969ccf58e7c/file-20170918-8245-fvelv2.jpg'
          />
        </div>
      )}
    </div>
  )
}

export { ArticlePreview }
