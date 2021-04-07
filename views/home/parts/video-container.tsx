import styles from '../index.module.scss'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import VideoPlayer from '../../../components/videoplayer';
import ProgressIndicator from '../../../components/progress-bar';
import { useState, useEffect } from 'react';

const VideoContainer = ({ width }: { width: number }) => {


    return (
        <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
                <img src='images/videoPreview.png' className={styles.video} />
            </div>


            {
                width > 1280 ?
                    <div className={styles.serveBlock}>
                        <ProgressIndicator count='+6' percentage={60} nomination='k' description={['We serve more than\n', '6,345 buildings']} />
                    </div>
                    : null
            }
        </div>
    )
}

export default VideoContainer