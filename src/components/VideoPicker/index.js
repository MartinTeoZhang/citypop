
const items = [{
  vid: '001',
  title: '30アルファードでPATROL  東京タワー・銀座〜日本橋 【仕事グルマで広角撮影テスト】2023.01.10 TOKYO Drive',
  image: '../../../images/1677675297881.jpg',
  duration: '01:30:25',
  url: '',
}, {
  vid: '002',
  title: '30アルファードでPATROL  東京タワー・銀座〜日本橋 【仕事グルマで広角撮影テスト】2023.01.10 TOKYO Drive',
  image: '../../../images/1677675297881.jpg',
  duration: '01:30:25',
  url: '',
}]

const VideoPicker = () => {
  return (
    <div className="container">
      {items.map(item =>
        <div className="video-box">
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