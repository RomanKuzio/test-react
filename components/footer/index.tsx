import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { footerData } from '../../constants';

const Footer = () => {
  const [width, setWindowWidth] = useState(0)
  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])


  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }


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
      {
        width < 662 ? <div className={styles.infoWrapper}>
          {
            footerData.map((item, index) => <details key={index} className={styles.info}>
              <summary prefix={'none'}>{item.header} <FontAwesomeIcon color={'#fff'} icon={faChevronDown}></FontAwesomeIcon></summary>
              {
                item.data.map((item, index) => <span key={index}>{item}</span>)
              }
            </details>)
          }
        </div> :
          <div className={styles.infoWrapper}>
            {
              footerData.map((item, index) => <div key={index} className={styles.info}>
                <span>{item.header}</span>
                {
                  item.data.map((item, index) => <span key={index}>{item}</span>)
                }
              </div>)
            }
          </div>
      }


      <div className={styles.bottomSection}>
        <img src='images/line.png'></img>
        <span>  © Copyright 2018, City5 consulting, LLC.</span>
      </div>
    </div>
  )
}

export default Footer