import React, { Component } from "react";

class VideoListItem extends Component { 
    render() {
        const video = this.props.video;
        const onVideoSelected = this.props.onVideoSelected;
        const videoKey = video.etag;
        const videoSrc = video.snippet.thumbnails.default.url;
        const title = video.snippet.title;

        return (
            <li className="list-group-item" key={videoKey} onClick={ () => onVideoSelected(video) }>
                <div className="video-item media">
                    <div className="media-left">
                        <img className="media-object" src={videoSrc} />
                    </div>
                    <div className="video-detail details media-body">
                        <div className="media-heading">{title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItem;