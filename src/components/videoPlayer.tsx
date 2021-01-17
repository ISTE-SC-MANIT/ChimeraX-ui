import ReactPlayer from 'react-player';
import React from "react"

interface VideoProps{
    src:string
}
const VideoPlayer: React.FC <VideoProps>= ({src}) => {

    return <>
        <ReactPlayer url={src} controls={true} width={"100%"} height="auto"/>
    </>
}

export default VideoPlayer