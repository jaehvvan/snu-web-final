import ReactPlayer from 'react-player';

const VideoModal = ({ videoURL }) => {
  return (
    <div className="visibleYoutube">
      <ReactPlayer
        url={videoURL}
        config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
      />
    </div>
  );
};

export default VideoModal;
