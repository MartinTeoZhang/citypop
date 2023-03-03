
import { Col, Row, Image, Divider } from "antd"
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
}, {
  vid: '002',
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
}, {
  vid: '002',
  title: '30アルファードでPATROL  東京タワー・銀座〜日本橋 【仕事グルマで広角撮影テスト】2023.01.10 TOKYO Drive',
  image: pic,
  duration: '01:30:25',
  url: '',
}]

const VideoPicker = () => {
  return (
    <div className="video-picker-container">
      {items.map(item =>
        <div key={item.vid} className="video-box">
          {/* <Row>
            <Col className="image-box" span={8}>
              <Row>
                <Image src={item.image} height={100}></Image>
              </Row>
            </Col>
            <Col className="info-box" span={16}>
              <Row>
                <span>{item.title}</span>
              </Row>
              <br />
              <Row>
                <span>{item.duration}</span>
              </Row>

            </Col>
          </Row>
          <Divider className="video-picker-divider" orientation={"right"}>
            {item.vid}
          </Divider> */}


        </div>

      )}

    </div>
  )
}

export default VideoPicker