
import styles from '../index.module.scss'

const companies: string[] = [
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


// import styles from '../index.module.scss'
// import classNames from 'classnames'
// import { useState, useEffect } from 'react'


// const companies: string[] = [
// 	'images/company1.png',
// 	'images/company2.png',
// 	'images/company1.png',
// 	'images/company2.png',
// 	'images/company1.png',
// ]

// const CompaniesContainer = ({ width }: { width: number }) => {
// 	// const generateArray = () => {
// 	// 	const a = [];

// 	// 	const length = width > 1024 ? 6 : width > 680 ? 4 : width > 410 ? 3 : 2

// 	// 	for (let i: number = 0; i < length; i++) {
// 	// 		const randomNumber: number = Math.round(Math.random() * (companies.length - 1))

// 	// 		a.push(companies[randomNumber])
// 	// 	}
// 	// 	console.log(a, 'genetated array')
// 	// 	return a;
// 	// }

// 	const [hideLogo, changeHideLogo] = useState(0)
// 	const [array, changeArray] = useState([])




// 	// useEffect(() => {
// 	// 	changeArray(generateArray())
// 	// 	const interval = setInterval(() => {

// 	// 		let randomNumber: number = Math.round(Math.random() * (array.length - 1))
// 	// 		const randomNumber1: number = Math.round(Math.random() * (companies.length - 1))
// 	// 		if (randomNumber == hideLogo) {
// 	// 			randomNumber = Math.round(Math.random() * (array.length - 1))
// 	// 		}



// 	// 		array[randomNumber] = companies[randomNumber1]
// 	// 		changeHideLogo(randomNumber);
// 	// 		setTimeout(() => changeArray(array), 500)
// 	// 	}, 1000);

// 	// 	return () => {
// 	// 		clearInterval(interval)
// 	// 	}

// 	// }, [])

// 	return (
// 		<div className={styles.companiesWrapper}>
// 			{
// 				companies.map((item: string, index: number) => <div key={index} className={classNames(styles.logoWrapper)}>
// 					<img src={item} className={styles.logo}></img>
// 				</div>)
// 			}
// 		</div>

// 	)
// }

// export default CompaniesContainer