import './index.scss'
import { Layout } from 'antd'
import HeadBar from '../../components/HeadBar'

const { Header, Footer, Sider, Content } = Layout

//home组件
const Home = () => {
  return (
    <div className="container">
      <Header className='header'><HeadBar /></Header>
      <Content></Content>
      <Footer></Footer>

    </div>
  )
}

export default Home

