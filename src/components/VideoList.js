import React from 'react';
import VideoItem from './VideoItem';

const videoList = ( {videos, onVideoSelect} ) => {
    const videosList = videos.map(video => {
        return <VideoItem
                    onVideoSelect={onVideoSelect} 
                    key={video.id.videoId} 
                    video={video}
                />
    });
    
    return <div className="ui relaxed divided list">{videosList}</div>;
};

export default videoList;