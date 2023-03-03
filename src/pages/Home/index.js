import './index.scss'
import { Layout, Col, Row } from 'antd'
import HeadBar from '../../components/HeadBar'
import VideoPicker from '../../components/VideoPicker'
import MusicPicker from '../../components/MusicPicker'
import VideoPlayer from '../../components/VideoPlayer'
import Brand from '../../components/Brand'
const { Header, Footer, Sider, Content } = Layout

//home组件
const Home = () => {
  return (
    <div className="container">
      {/* <Header className='header'><HeadBar /></Header> */}
      <Content>
        <Row align={"center"} justify={"center"} wrap={false}>

          <Col span={4}>
            <Row>
              <Brand />
            </Row>
            <Row>
              <VideoPicker />
            </Row>
          </Col>
          <Col span={14}>
            <VideoPlayer />
          </Col>
          <Col span={4}>
            <MusicPicker />
          </Col>

        </Row>
      </Content>
      <Footer></Footer>

    </div>
  )
}

export default Home

