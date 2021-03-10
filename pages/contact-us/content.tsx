import styles from './index.module.scss'
import ContactUsForm from './parts/contat-form'
import LocationContainer from './parts/location-container'
const ContactUsContent = () => {
  return (
    <div className={styles.contactUsWrapper}>
      <div className={styles.content}>
        <div className={styles.formSection}>
          <span className={styles.title}>Get In Touch</span>
          <span className={styles.subtitle}>Stay up to date with new compliances & legislation from our professionals for free</span>
          <ContactUsForm />
        </div>
        <LocationContainer />
      </div>
    </div>
  )
}

export default ContactUsContent