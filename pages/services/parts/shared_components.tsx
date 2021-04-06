import styles from "../index.module.scss";

const SquareBlock = ({
  data,
  small = false,
  width,
}: {
  data: string;
  small?: boolean;
  width: number;
}) => {
  return (
    <div
      className={styles.squareBlockWrapper}
      style={{ marginRight: small ? (width < 680 ? 8 : 20) : 0 }}
    >
      <div className={styles.markWrapper}>
        <img src="images/mark.png" />
      </div>
      <span>{data}</span>
    </div>
  );
};

export default SquareBlock;
