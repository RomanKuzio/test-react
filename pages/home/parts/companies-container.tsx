import styles from '../index.module.scss'

const companies: string[] = [
	'images/company1.png',
	'images/company2.png',
	'images/company1.png',
	'images/company2.png',
	'images/company1.png',
	'images/company2.png',
]

const CompaniesContainer = () => {
	return (
		<div className={styles.companiesWrapper}>
			{
				companies.map((item: string, index: number) => <div key={index} className={styles.logoWrapper}>
					<img src={item} className={styles.logo}></img>
				</div>)
			}
		</div>
	)
}

export default CompaniesContainer