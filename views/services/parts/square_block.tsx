import styles from "../index.module.scss";

const SquareBlock = ({
  data,
  small = false,
  width,
  squareWidth = 245,
  horizontal = false,
  marginBottom = 15,
}: {
  data: string;
  small?: boolean;
  marginBottom?: number;
  width: number;
  squareWidth?: number | string;
  horizontal?: boolean;
}) => {
  return (
    <div
      className={styles.squareBlockWrapper}
      style={{
        marginRight: small ? (width < 680 ? 8 : 15) : 0,
        marginBottom: marginBottom,
        minWidth: horizontal ? 347 : 240,
        height: small
          ? width < 680
            ? 150
            : 200
          : width < 680
          ? 150
          : horizontal
          ? 172
          : 168,
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
