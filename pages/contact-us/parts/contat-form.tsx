import Button from "../../../components/button"
import Dropdown from "../../../components/dropdown"
import Input from "../../../components/input"
import TextArea from "../../../components/text-area"
import styles from '../index.module.scss'
const ContactUsForm = () => {
  return (
    <form className={styles.contactForm}>
      <Input title='Full name' />
      <Input title='Full name' />
      <Dropdown title='Full name' />
      <Input title='Full name' />
      <TextArea title='Message' placeholder='Enter your message' />
      <Button text='SEND' style={styles.button} action={() => console.log('send')} />
    </form>
  )
}

export default ContactUsForm