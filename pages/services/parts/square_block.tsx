import styles from "../index.module.scss";

const SquareBlock = ({
  data,
  small = false,
  width,
  squareWidth = 245,
}: {
  data: string;
  small?: boolean;
  width: number;
  squareWidth?: number | string;
}) => {
  console.log(squareWidth);
  return (
    <div
      className={styles.squareBlockWrapper}
      style={{
        marginRight: small ? (width < 680 ? 8 : 15) : 0,
        height: small ? 200 : 168,
        width: squareWidth,
      }}
    >
      <div className={styles.markWrapper}>
        <img src="images/mark.png" />
      </div>
      <span>{data}</span>
    </div>
  );
};

export default SquareBlock;
