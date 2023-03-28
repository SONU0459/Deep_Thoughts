import React from 'react';

import Expended from './ExpendComponents/Exoended';

function Video() {
  return (
    <div className='video-ass'>
      <Expended    />
      <div className='video-container'>
        <iframe
          title='YouTube video player'
          width='100%'
          height='315px'
          overFlow="hidden"


          src='https://www.youtube.com/embed/TiMRwri1xJ8'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>

    </div>
  );
}

 
export default Video;
