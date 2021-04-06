import styles from './index.module.scss'
import NewsContainer from './parts/news-container'
import { newsList } from '../../constants'


const NewsContent = () => {
  return (<div className={styles.newsWrapper}>
    <span className={styles.title}>Latest News</span>
    <div className={styles.newsContent}>{
      newsList.map((item, index) => <NewsContainer news={item} key={index} />)
    }

    </div>
  </div>)
}

export default NewsContent