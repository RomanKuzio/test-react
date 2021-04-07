import styles from "./index.module.scss";
interface IProps {
  title: string;
  placeholder: string;
  onChange: (e: any) => void;
}
const Dropdown = ({ ...props }: IProps) => {
  const { title, placeholder, onChange } = props;
  return (
    <div className={styles.dropdownWrapper}>
      <span>{title}</span>
      <select
        className={styles.dropdown}
        placeholder={placeholder}
        id="subject"
        name="subject"
        onChange={onChange}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
        <option value="test4">test4</option>
      </select>
    </div>
  );
};

export default Dropdown;
