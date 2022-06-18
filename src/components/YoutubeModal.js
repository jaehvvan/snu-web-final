import YouTube from 'react-youtube';

const VideoModal = (props) => {
  const { videoID, timestamp } = props;

  return <YouTube videoId={videoID} onReady={(e) => e.target.seekTo(timestamp)} />;
};

export default VideoModal;
