import styles from "./index.module.scss";

interface IProps {
  title: string;
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
}

const Input = ({ ...props }: IProps) => {
  const { title, placeholder, name, onChange } = props;

  return (
    <div className={styles.inputWrapper}>
      <span>{title}</span>
      <input
        onChange={onChange}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        type="dropdown"
      />
    </div>
  );
};

export default Input;
