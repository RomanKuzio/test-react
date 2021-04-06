
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../index.module.scss'

const RowBlock = ({ data }: { data: string }) => {
  return (
      <div className={styles.rowBlockWrapper}>
          <div className={styles.markWrapper}><img src='images/mark.png' /></div>
          <span>{data}</span>
          <FontAwesomeIcon className={styles.icon} icon={faArrowAltCircleRight} color='#bcbfc4' />
      </div>
  )
}

export default RowBlock