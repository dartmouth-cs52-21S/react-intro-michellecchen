import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading; please be patient...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div id="video-detail">
            {/* <iframe src={url} title="video-detail" /> */}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title="responsive-video" />
            </div>
            <div className="details">
                <div id="video-title">{video.snippet.title}</div>
                <div id="video-description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

const mapStateToProps = (reduxState) => ({
    video: reduxState.video.selected,
});

export default connect(mapStateToProps, null)(VideoDetail);
