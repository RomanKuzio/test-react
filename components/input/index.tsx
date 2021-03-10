import styles from './index.module.scss'

interface IProps {
  title: string
}

const Input = ({ ...props }: IProps) => {
  const { title } = props

  return (
    <div className={styles.inputWrapper}>
      <span>{title}</span>
      <input className={styles.input} type='dropdown' />
    </div>


  )
}

export default Input