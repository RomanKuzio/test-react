import { INewsProps } from '../../../constants'
import styles from '../index.module.scss'

interface IProps {
  news: INewsProps
}

const NewsContainer = ({ news }: IProps) => {
  const { title, date, image, content } = news
  return (
    <div className={styles.news}>
      <div className={styles.newsData}>
        <span>{date}</span>
        <span className={styles.subtitle}>{title}</span>
        <span>{content}</span>
      </div>
      <img src={image}></img>
    </div>
  )
}

export default NewsContainer