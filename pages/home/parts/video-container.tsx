import styles from '../index.module.scss'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import VideoPlayer from '../../../components/videoplayer';
import ProgressIndicator from '../../../components/progress-bar';

const VideoContainer = () => {
    return (
        <div className={styles.videoWrapper}>
            <VideoPlayer className={styles.video} />
            <div className={styles.serveBlock}>
                <ProgressIndicator count='+6' percentage={60} nomination='k' description={['We serve more than\n', '6,345 buildings']} />
                {/* <SemiCircleProgressBar percentage={60} stroke='#198BF4' strokeWidth={5} />
                <div className={styles.counter}>+6<span>k</span></div>
                <div className={styles.description}>
                    We serve more than<br /><span>6,345 buildings</span>
                </div> */}
            </div>
        </div>
    )
}

export default VideoContainer