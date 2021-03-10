import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../index.module.scss'

const RowBlock = () => {
    return (
        <div className={styles.rowBlockWrapper}>
            <div className={styles.markWrapper}><img src='images/mark.png' /></div>
            <span>Mandatory Inclusionary Housing</span>
            <FontAwesomeIcon icon={faArrowAltCircleRight} color='#bcbfc4' />
        </div>
    )
}

const SquareBlock = ({ small = false }) => {
    return (
        <div className={styles.squareBlockWrapper} style={{ width: small ? '16%' : '48%', marginBottom: small ? 0 : 20 }}>
            <div className={styles.markWrapper}><img src='images/mark.png' /></div>
            <span>Mandatory and Voluntary Inclusionary Housing</span>
        </div>
    )
}


export { RowBlock, SquareBlock }