import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { CircularProgressbar } from "react-circular-progressbar";

interface IProps {
  percentage: number;
  count: string;
  description: string[];
  nomination: string;
  descriptionStyle?: string;
  dataStyle?: string;
  circleBg?: string;
  withMargin?: boolean;
}

const ProgressIndicator = ({ ...props }: IProps) => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const {
    percentage,
    count,
    description,
    nomination,
    dataStyle,
    descriptionStyle,
    circleBg,
    withMargin,
  } = props;

  return (
    <div
      className={styles.progressIndicatorWrapper}
      style={{ marginRight: withMargin ? 25 : 0 }}
    >
      {/* <CircularProgressbar value={percentage} text={`${percentage}%`} className={styles.bar} />; */}
      <SemiCircleProgressBar
        diameter={width < 1124 ? (width < 680 ? width * 0.45 : 170) : 200}
        background={circleBg ? circleBg : "#575F6A"}
        percentage={percentage}
        stroke="#198BF4"
        strokeWidth={5}
      />
      <div className={`${styles.counter} ${dataStyle}`}>
        {count}
        <span>{nomination}</span>
      </div>
      <div className={`${styles.description} ${descriptionStyle}`}>
        {description[0]}
        <span>{description[1]}</span>
        {description[2]}
      </div>
    </div>
  );
};

export default ProgressIndicator;
