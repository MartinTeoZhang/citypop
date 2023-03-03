import './index.scss'

const VideoPlayer = () => {
  return (
    <div className="video-cotainer">
      <video className="video" src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
    </div>
  )
}

export default VideoPlayer