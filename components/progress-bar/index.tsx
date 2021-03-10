import React from "react"
import styles from './index.module.scss'
import SemiCircleProgressBar from "react-progressbar-semicircle";



interface IProps {
    percentage: number,
    count: string,
    description: string[],
    nomination: string,
    descriptionStyle?: string,
    dataStyle?: string,
    circleBg?: string
}

const ProgressIndicator = ({ ...props }: IProps) => {
    const { percentage, count, description, nomination, dataStyle, descriptionStyle, circleBg } = props

    return (
        <div className={styles.progressIndicatorWrapper}>

            <SemiCircleProgressBar diameter={200} background={circleBg ? circleBg : '#575F6A'} percentage={percentage} stroke='#198BF4' strokeWidth={5} />
            <div className={`${styles.counter} ${dataStyle}`}>{count}<span>{nomination}</span></div>
            <div className={`${styles.description} ${descriptionStyle}`}>
                {description[0]}<span>{description[1]}</span>{description[2]}
            </div>
        </div>
    )
}

export default ProgressIndicator