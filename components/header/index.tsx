import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../button'
// import Logo from '../../public/images/logo.png'
import styles from './index.module.scss'
const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<img className={styles.logo} src='images/logo.png'></img>
			<div className={styles.contactSection}>
				<span className={styles.phoneNumber}>212.571.3003</span>
				<FontAwesomeIcon icon={faSearch} color='#ffffff' />
				<Button style={styles.contactButton} text='CONTACT US' action={() => console.log('CONTACTS')} />
			</div>
		</div>
	)
}


export default Header
