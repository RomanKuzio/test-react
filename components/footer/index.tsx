import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.topSection}>
        <img src='images/logo.png' />
        <div className={styles.contactSection}>
          <span>About Us</span>
          <span>Contact US</span>
          <div className={styles.imageContainer}>
            <img src='images/linkedIn.png' />
          </div>
          <div className={styles.imageContainer}>
            <img src='images/mail.png' />
          </div>
        </div>

      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>

        </div>
        <div className={styles.info}>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>

        </div>
        <div className={styles.info}>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>

        </div>
        <div className={styles.info}>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>

        </div>
        <div className={styles.info}>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>
          <span>Tax Department</span>

        </div>

      </div>
      <div className={styles.bottomSection}>
        <img src='images/line.png'></img>
        <span>  © Copyright 2018, City5 consulting, LLC.</span>
      </div>
    </div>
  )
}

export default Footer