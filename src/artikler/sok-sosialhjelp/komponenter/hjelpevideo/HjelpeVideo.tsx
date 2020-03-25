import * as React from "react";
import "./hjelpeVideo.less";

const HjelpeVideo: React.FC<{tittel: string}> = ({tittel}) => {
    return (
        <div className="sok_sosialhjelp_video">
            <iframe
                title={tittel}
                src="https://video.qbrick.com/play2/embed/player?accountId=763558&mediaId=488b9cab-00015227-8c78175a&configId=wcag&pageStyling=adaptive&autoplay=false&repeat=false&sharing=false"
                allowFullScreen={true}
                frameBorder="0"
                style={{border: "none"}}
                className="sok_sosialhjelp_video_player"
            ></iframe>
        </div>
    );
};

export default HjelpeVideo;
