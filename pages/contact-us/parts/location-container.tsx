import styles from '../index.module.scss'

const LocationContainer = () => {
  return (
    <div className={styles.locationWrapper}>
      <img src='images/map.png' />
      <div className={styles.infoWrapper}>
        <div className={styles.infoBlock}>
          <span>
            1115 Brodway, 10th Floor
        </span>
          <span>
            New York, NY 10010,(p)
        </span>
          <span>
            212.571.3003
        </span>
        </div>
        <div className={styles.infoBlock}>
          <span>
            490 433 94 9993
        </span>
          <span>
            info@example.com
        </span>

        </div>
      </div>
    </div>
  )
}

export default LocationContainer