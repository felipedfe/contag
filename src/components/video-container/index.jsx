import React, { useState, useRef, useEffect } from 'react';
import placeholder from '../../assets/images/placeholder-youtube.png';

import {
  VideoWrapper,
  Video,
  PlaceholderImage,
} from './styled';

function VideoContainer({
  url,
  autoPlay = "0",
  title = "0",
  byLine = "0",
  portrait = "0",
  controls = "0",
  loop = "0",
  muted = "0",
  autopause = "0",
  aspectRatio = "16/9",
  rel = "0"
}) {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setShowPlaceholder(false);
    // Atualizando o src diretamente via ref
    if (videoRef.current) {
      videoRef.current.src = `${url}?autoplay=1&title=${title}&byline=${byLine}&portrait=${portrait}&controls=${controls}&loop=${loop}&muted=${muted}&autopause=${autopause}&rel=${rel}`;
    }
  };

  useEffect(() => {
    console.log(showPlaceholder)
  }, [showPlaceholder])


  return (
    <VideoWrapper $aspectRatio={aspectRatio}>
      {showPlaceholder && (
        <PlaceholderImage
          src={placeholder}
          alt="Video Placeholder"
          onClick={handlePlayVideo}
          // show={showPlaceholder}
          draggable="false"
          style={{cursor: 'pointer'}}
        />
      )}
      <Video
        ref={videoRef}
        title="video-container"
        src={`${url}?h=c1d00cc6da&autoplay=${autoPlay}&title=${title}&byline=${byLine}&portrait=${portrait}&controls=${controls}&loop=${loop}&muted=${muted}&autopause=${autopause}&rel=${rel}`}
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
      />
    </VideoWrapper>
  )
};

export default VideoContainer;
