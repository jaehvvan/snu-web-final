import YouTube from 'react-youtube';

const VideoModal = ({videoID, timestamp}) => {
  return <YouTube videoId={videoID} onReady={(e) => e.target.seekTo(timestamp)} />;
};

export default VideoModal;
