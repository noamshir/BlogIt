import Image from '../../../styles/img/code-folder.png'

const UserImage = ({ src }) => {
  return (
    <div className='user-image flex aic'>
      <img src={Image} loading='lazy' />
    </div>
  )
}

export { UserImage }
