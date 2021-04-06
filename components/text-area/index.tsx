import styles from './index.module.scss'
interface IProps {
  title: string,
  placeholder: string
}
const TextArea = ({ ...props }: IProps) => {
  const { title, placeholder } = props
  return (
    <div className={styles.textAreaWrapper}>
      <span>{title}</span>
      <textarea placeholder={placeholder} className={styles.textArea} rows={4} ></textarea>
    </div>

  )
}

export default TextArea