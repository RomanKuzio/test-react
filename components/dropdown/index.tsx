import styles from './index.module.scss'
interface IProps {
  title: string
}
const Dropdown = ({ ...props }: IProps) => {
  const { title } = props
  return (
    <div className={styles.dropdownWrapper}>
      <span>{title}</span>
      <select className={styles.dropdown} id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </div>

  )
}

export default Dropdown