import React from "react"
import AudioPlayer from 'material-ui-audio-player';

interface AudioProps {
    src: string
}

const Audio: React.FC<AudioProps> = ({ src }) => {

    return <>
        <AudioPlayer
            elevation={1}
            width="100%"
            variation="primary"
            spacing={3}
            download={false}
            autoplay={false}
            order="standart"

            loop={true}
            src={src}
        />
    </>

}

export default Audio