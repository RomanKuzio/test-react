import styles from './index.module.scss'
import NewsContainer from './parts/news-container'

export interface INewsProps {
  date: string
  title: string
  content: string,
  image: string
}


const news: INewsProps[] = [
  {
    date: 'May 11 2019',
    content: 'A lottery offering 3 newly constructed affordable apartments is officially open in the Bushwick neighborhood.A lottery offering 3 newly constructed...',
    title: 'Newly Constructed Affordable Units Available in Bushwick',
    image: 'images/newsImage.png'
  },
  {
    date: 'May 11 2019',
    content: 'A new affordable housing lottery is now open in Bedford-Stuyvesant neighborhood of Brooklyn. Managed...',
    title: 'New Affordable Housing Lottery Open in Bedford-Stuyvesant',
    image: 'images/newsImage.png'
  },
  {
    date: 'May 11 2019',
    content: 'Located at 141 Utica Avenue, the four-story building developed by Twin Builders will rise...',
    title: 'Modern Design Building Will Bring Affordable Housing to Crown Heights this May',
    image: 'images/newsImage.png'
  },
  {
    date: 'May 11 2019',
    content: 'Newly renovated residential buildings at the center of Bushwick neighborhood of Brooklyn is now accepting...',
    title: '5 Newly Renovated Affordable Apartments Available in Bushwick',
    image: 'images/newsImage.png'
  }
]

const NewsContent = () => {
  return (<div className={styles.newsWrapper}>
    <span className={styles.title}>Latest News</span>
    <div className={styles.newsContent}>{
      news.map((item, index) => <NewsContainer news={item} key={index} />)
    }

    </div>
  </div>)
}

export default NewsContent