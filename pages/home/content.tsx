import Button from '../../components/button'
import styles from './index.module.scss'
import VideoContainer from './parts/video-container'
import CompaniesContainer from './parts/companies-container'
import { useEffect, useState } from 'react'
const HomeContent = () => {
    const [width, setWindowWidth] = useState(0)
    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])


    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.mainSection}>
                <div className={styles.descriptionWrapper}>
                    <span className={styles.title}>Real Estate<br />Consultants</span>
                    <span className={styles.subtitle}>Powered by CompliBuddy technology</span>
                    <span className={styles.description}>Consulting & Advisory experts for New York City{width > 680 ? <br /> : null}property compliance.</span>
                    <Button style={styles.button} text='SCHEDULE A DEMO' action={() => console.log('Schedule a Demo')} />
                </div>
                <VideoContainer width={width} />

            </div>
            <CompaniesContainer />
        </div>
    )
}

export default HomeContent