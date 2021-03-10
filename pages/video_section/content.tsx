import Button from '../../components/button'
import styles from './index.module.scss'
import ProgressIndicator from '../../components/progress-bar'

const VideoSectionContent = () => {
    return (
        <div className={styles.videoSectionWrapper}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <span className={styles.title}>Powered by<br />ComplyBuddy Software</span>
                    <span className={styles.description}>NYC Real Estate Compliance made easy with Compliance Automation, case  management, and comprehensive reporting. Schedule a Demo or to find out whats happening, check out the Blog.</span>
                    <Button style={styles.button} text='CONTACT US' action={() => console.log('CONTACT US')}></Button>
                    <div className={styles.indicatorsWrappers}>

                        <ProgressIndicator count='1' percentage={60} nomination='M' description={['More than ', '1 Million\n', 'violations monitored']} dataStyle={styles.indicatorData} descriptionStyle={styles.indicatorDescription} />

                        <ProgressIndicator count='10' percentage={60} nomination='K' description={['More than ', '10,000 cases\n', 'managed']} dataStyle={styles.indicatorData} descriptionStyle={styles.indicatorDescription} />
                    </div>
                </div>
                <div className={styles.rightSide}><img src='images/playIcon.png' /></div>
            </div>
        </div>
    )
}

export default VideoSectionContent

