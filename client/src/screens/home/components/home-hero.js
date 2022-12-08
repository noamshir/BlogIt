import { Col, Container, Row } from 'react-bootstrap'
import codeFolderImg from '../../../styles/img/code-folder.png'

const HomeHero = () => {
  return (
    <div className='home-hero flex aic'>
      <Container>
        <Row>
          <Col xm={8}>
            <div className='home-hero-text  flex-col jcc'>
              <p className='hero-text-title'>
                Learn Something new. All the time.
              </p>
              <p className='text-start hero-sub-text'>
                Discover stories, thinking, and expertise from writers on any
                tech topic.
              </p>
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
