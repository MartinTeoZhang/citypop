
import { Col, Row, Image } from "antd"
import './index.scss'
import pic from '../../images/1677675297881.jpg'

const items = [{
  vid: '001',
  title: '30アルファードでPATROL  東京タワー・銀座〜日本橋 【仕事グルマで広角撮影テスト】2023.01.10 TOKYO Drive',
  image: pic,
  duration: '01:30:25',
  url: '',
}, {
  vid: '002',
  title: '30アルファードでPATROL  東京タワー・銀座〜日本橋 【仕事グルマで広角撮影テスト】2023.01.10 TOKYO Drive',
  image: pic,
  duration: '01:30:25',
  url: '',
}]

const VideoPicker = () => {
  return (
    <div className="container">
      {items.map(item =>
        <div key={item.vid} className="video-box">
          <Row>
            <Col>
              <Row><Image src="url" height={"100"}></Image></Row>
            </Col>
            <Col>
              <Row>
                <span>{item.title}</span>
              </Row>
              <Row>
                <span>{item.duration}</span>
              </Row>

            </Col>
          </Row>
          <div className="image-box">
          </div>
          <div className="info-box">
          </div>
        </div>

      )}

    </div>
  )
}

export default VideoPicker