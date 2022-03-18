
import React from 'react';

// Function base component
const VideoDetail = (props) => { 
    if (!props.video) { 
        return <div>Loading...</div>;
    }
    return (
        <div class="col-md-8">
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
                </div>
            </div>
            <div>
                <h3>{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;