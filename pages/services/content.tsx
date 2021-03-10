import Button from '../../components/button'
import styles from './index.module.scss'
import ServiceContainer from './parts/service_container'


export interface IServiceProps {
    logo: string,
    title: string,
    description: string,
    additionalData: string[]
    bottomSection?: boolean,
}


const services: IServiceProps[] = [
    {
        logo: 'images/service1.png',
        description: 'Property Tax exemption and abatement incentive calculations are an important part of the financial study when considering new construction or rehabilitation development. Whether it be residential, commercial, hotel, or mixed used projects, we offer advisory services to make the most effective use of the continuing tax benefits available in the New York real estate market.',
        title: 'Property Tax\n\nExemptions & Abatements',
        additionalData: ['421-a Tax Exemption', 'Mandatory and Voluntary Inclusionary Housing', 'AIRS', '421-A Marketing Monitor', 'J51', 'RPIE filings'],
        bottomSection: true
    },
    {
        logo: 'images/service2.png',
        description: 'Inclusionary housing programs are local policies that tap the economic gains from rising real estate values to create affordable housing for lower income families.  An inclusionary housing program might require developers to sell or rent 10 to 30 percent of new residential units to lower-income residents.',
        title: 'Inclusionary Housing Programs',
        additionalData: ['Mandatory Inclusionary Housing', 'Voluntary Inclusionary Housing', 'Affordable Independent Residences for Seniors',],
    },
    {
        logo: 'images/service2.png',
        description: 'City5 is an approved marketing agent of NYC HPD, HDC, and HPS agencies.  We have been responsible for the marketing, lease-up, and compliance of thousands of units across programs such as 421-a(16) Affordable Housing New York Program, LITCH, Inclusionary Housing Programs, AIRS (PFASH), and more.  ',
        title: 'Affordable Housing Marketing & Lease-up',
        additionalData: ['Mandatory Inclusionary Housing', 'Affordable Housing ', 'ICAP', 'J51'],
    },
    {
        logo: 'images/service1.png',
        description: 'Property Tax exemption and abatement incentive calculations are an important part of the financial study when considering new construction or rehabilitation development. Whether it be residential, commercial, hotel, or mixed used projects, we offer advisory services to make the most effective use of the continuing tax benefits available in the New York real estate market.',
        title: 'Property Tax\n\nExemptions & Abatements',
        additionalData: ['421-a Tax Exemption', 'Mandatory and Voluntary Inclusionary Housing', 'AIRS', '421-A Marketing Monitor', 'J51', 'RPIE filings'],
        bottomSection: true
    },
    {
        logo: 'images/service1.png',
        description: 'Our violation removal specialists are highly skilled professionals who represent our clients for violations issued by\nthe DOB, ECB, FDNY, DSNY, HPD, DOT, DOH and DEP agencies.',
        title: 'Violations',
        additionalData: ['Mandatory Inclusionary Housing', 'Voluntary Inclusionary Housing', 'Affordable Independent Residences for Seniors', 'Mandatory Inclusionary Housing', 'Voluntary Inclusionary Housing', 'Affordable Independent Residences for Seniors'],
    },
]

const ServicesContent = () => {
    return (
        <div className={styles.servicesWrapper}>
            {services.map((item: IServiceProps, index: number) => <ServiceContainer key={index} service={item} reverse={index % 2 != 0} index={index} />)}
        </div>
    )
}

export default ServicesContent

