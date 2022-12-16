import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { LogoAndAppName } from '../main-header/main-header'
import { Text } from '../text'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <Container>
        <div className='main-footer-content flex aic jcsb'>
          <LogoAndAppName />
          <div className='social-container flex aic'>
            <Text value='Project by Noam S.M' />
            <a
              className='flex aic jcc'
              href='https://www.linkedin.com/in/noam-shir-melzer-9a0059232/'
              target='_blank'
            >
              <FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
