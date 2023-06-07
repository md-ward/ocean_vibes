import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';

const VideePlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const handlePlayPause = () => {
        const videoNode = videoRef.current;
        
        if (videoNode.paused) {
            videoNode.play();
            setIsPlaying(true);
        } else {
            videoNode.pause();
            setIsPlaying(false);
        }
    };
    return (


        <span className='relative'>
            <video className=" md:h-80 w-full object-cover place-items-center " src='assets/video/ocean-sea-wave-video.mp4' ref={videoRef}  />

            <button className='absolute z-10   bottom-6  right-8  text-slate-300 ' onClick={handlePlayPause}>
                {isPlaying ? <FontAwesomeIcon icon={faPause} size={'2x'}  /> : <FontAwesomeIcon size={'2x'} icon={faPlay} />}

            </button>
        </span>

    );
}

export default VideePlayer;