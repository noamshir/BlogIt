import { Col, Container, Row } from 'react-bootstrap'
import { Text } from '../../../components/general/text'
import codeFolderImg from '../../../styles/img/code-folder.png'

const HomeHero = () => {
  return (
    <div className='home-hero flex aic'>
      <Container>
        <Row>
          <Col xm={8}>
            <div className='home-hero-text  flex-col jcc'>
              <Text
                className='hero-text-title'
                value='Learn Something new. All the time.'
              />
              <Text
                className='text-start hero-sub-text'
                value='Discover stories, thinking, and expertise from writers on any
                tech topic.'
              />
            </div>
          </Col>
          <Col xm={4}>
            <div className='code-folder-container flex aic'>
              <img src={codeFolderImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export { HomeHero }
