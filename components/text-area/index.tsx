import styles from "./index.module.scss";
interface IProps {
  title: string;
  placeholder: string;
  onChange: (e: any) => void;
}
const TextArea = ({ ...props }: IProps) => {
  const { title, placeholder, onChange } = props;
  return (
    <div className={styles.textAreaWrapper}>
      <span>{title}</span>
      <textarea
        placeholder={placeholder}
        className={styles.textArea}
        rows={4}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
