import codeFolderImg from '../../../styles/img/code-folder.png'

const HomeHero = () => {
  return (
    <div className='home-hero main-layout flex aic'>
      <div className='home-hero-text  flex-col jcc'>
        <p className='text-start hero-text-title'>
          Learn Something new. All the time.
        </p>
        <p className='text-start hero-text'>
          Discover stories, thinking, and expertise from writers on any tech
          topic.
        </p>
      </div>
      <div className='code-folder-container flex jcc'>
        <img src={codeFolderImg} />
      </div>
    </div>
  )
}

export { HomeHero }
