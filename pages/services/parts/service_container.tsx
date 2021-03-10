

import Button from '../../../components/button';
import { IServiceProps } from '../content'
import styles from '../index.module.scss'
import { RowBlock, SquareBlock } from './shared_components';

interface IProps {
  service: IServiceProps
  reverse?: boolean
  index: number
}

const ServiceContainer = ({ service, reverse, index }: IProps) => {
  const { logo, title, description, additionalData } = service;
  if (index == 4) {
    return <div className={styles.serviceWrapper}>
      <div className={styles.centerTitleWrapper}>
        <span className={styles.title}>{title}</span>
        <span style={{ textAlign: 'center', margin: '3rem 0 4rem' }} className={styles.description}>{description}</span>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.logoWrapper}><img className={styles.logo} src={logo}></img></div>
        <div className={styles.descriptionWrapper}>
          <div style={{ width: '100%' }}> {additionalData.map((item, index) => <RowBlock />)}</div>
          <Button style={styles.button} text='REQUEST A SERVICE' action={() => console.log('REQUEST')} />
        </div>
      </div>
    </div>
  }



  return (
    <div className={styles.serviceWrapper}>
      <div className={styles.mainSection} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <div className={styles.logoWrapper}><img className={styles.logo} src={logo}></img></div>

        <div className={styles.descriptionWrapper}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
          <div style={{ width: '100%', margin: '20px 0' }}> {additionalData && (index === 1 || index === 4) ? additionalData.map((item, index) => <RowBlock />) : null}</div>
          {index == 2 ? <span className={styles.additionalText}>*HPD Administering Agent services provided by  Rentability, a nonprofit entity founded by one of City5's principals.</span> : null}
          {additionalData && (index == 2) ?
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <SquareBlock />
              <SquareBlock />
              <SquareBlock />
              <SquareBlock />
            </div> : null
          }

          <Button style={styles.button} text='REQUEST A SERVICE' action={() => console.log('REQUEST')} />

        </div>
      </div>
      {
        service.additionalData && service.bottomSection ? <div className={styles.bottomSectionWrapper}>
          {
            additionalData.map((item, index) => <SquareBlock small />)
          }</div> : null
      }


    </div>
  )
}

export default ServiceContainer