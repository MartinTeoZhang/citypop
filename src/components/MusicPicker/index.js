import { Col, Row, Image, Divider } from 'antd'
import pic from '../../images/1677675297881.jpg'
import './index.scss'

const items = [
  {
    id: '001',
    image: pic,
    title: "PLASTIC LOVE",
    artist: "NAOKI feat. Misa",
    album: "PLASTIC LOVE",
    duration: "3:30"
  }, {
    id: '002',
    image: pic,
    title: "PLASTIC LOVE",
    artist: "NAOKI feat. Misa",
    album: "PLASTIC LOVE",
    duration: "3:30"
  }, {
    id: '003',
    image: pic,
    title: "PLASTIC LOVE",
    artist: "NAOKI feat. Misa",
    album: "PLASTIC LOVE",
    duration: "3:30"
  }, {
    id: '004',
    image: pic,
    title: "PLASTIC LOVE",
    artist: "NAOKI feat. Misa",
    album: "PLASTIC LOVE",
    duration: "3:30"
  }
]

//音乐选择组件
const MusicPicker = () => {
  return (
    <div className="music-box">
      {items.map(item =>
        <Row key={item.id} >
          <Col className="image-box" span={8}>
            <Row>
              <Image className='music-img' src={item.image} height={100}></Image>
            </Row>
          </Col>
          <Col className="info-box" span={16}>
            <Row>
              <span>{item.title}</span>
            </Row>
            <Row>
              <span>{item.artist}</span>
            </Row>
            <Row>
              <span>ALBUM:{item.album}</span>
            </Row>
            <br />
            <Row>
              <span>{item.duration}</span>
            </Row>
          </Col>
          <Divider className="music-picker-divider" orientation={"right"}>{item.id}</Divider>
        </Row>




      )}
    </div>
  )
}

export default MusicPicker