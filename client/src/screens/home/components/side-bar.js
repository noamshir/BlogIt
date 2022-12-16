import { Text } from '../../../components/general/text'

const TopicItem = ({ topic }) => {
  return (
    <div className='topic-item flex aic jcc'>
      <Text className='light' value={topic} />
    </div>
  )
}

const SideBarTopics = ({ topics }) => {
  return (
    <div className='side-bar-topics flex fw'>
      {topics.map((topic) => {
        return <TopicItem topic={topic} key={topic} />
      })}
    </div>
  )
}

const Sidebar = () => {
  const topics = ['Python', 'Fullstack', 'React', 'Web3', 'Machine Learning']
  return (
    <div className='side-bar'>
      <div className='side-bar-content flex-col'>
        <Text value='Discover the relevant techs for you' />
        <SideBarTopics topics={topics} />
        <hr />
      </div>
    </div>
  )
}

export { Sidebar }
