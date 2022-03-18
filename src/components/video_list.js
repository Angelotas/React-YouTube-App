import React, { Component } from "react";
import VideoListItem from "./video_list_item";


// create video list component component
class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map((video) =>
            <div>
                <VideoListItem
                    onVideoSelected={this.props.onVideoSelected}
                    key={video.etag}
                    video={video} />
            </div>);

        return (
            <div class="col-md-4">
                <ul className="list-group">
                    {videoItems}
                </ul>
            </div>
        );
    }
}
    
export default VideoList;