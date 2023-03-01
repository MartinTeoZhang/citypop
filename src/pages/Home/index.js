import './index.scss'
import { Layout, Col, Row } from 'antd'
import HeadBar from '../../components/HeadBar'
import VideoPicker from '../../components/VideoPicker'
const { Header, Footer, Sider, Content } = Layout

//home组件
const Home = () => {
  return (
    <div className="container">
      <Header className='header'><HeadBar /></Header>
      <Content>
        <Row align={"center"}>
          <Col md={"24"} lg={"22"} xl={"22"}>
            <Row style={{ background: "white", height: "100vh" }} align={"center"}>
              <Col md={"4"} lg={"4"} xl={"4"}>
                <VideoPicker />
              </Col>
              <Col md={"16"} lg={"16"} xl={"16"}>
                <br />
              </Col>
              <Col md={"4"} lg={"4"} xl={"4"}>
                <br />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>

    </div>
  )
}

export default Home

