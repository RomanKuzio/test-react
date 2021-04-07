import styles from "../index.module.scss";
import classNames from "classnames";
import { companies } from "../../../constants/index";
import { useState, useEffect } from "react";

const CompaniesContainer = () => {
  const [hideIndex, changeHideIndex] = useState(-1);
  const [array, changeArray] = useState([]);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    const screenSize: number = updateDimensions();

    window.addEventListener("resize", updateDimensions);
    const intervalData: NodeJS.Timeout = changeCompanies(screenSize);
    return () => {
      clearInterval(intervalData);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const updateDimensions = (): number => {
    const width = window.innerWidth;
    setWindowWidth(width);
    return width;
  };

  const generateArray = (screenSize: number) => {
    const a = [];

    const length =
      screenSize > 1024 ? 6 : screenSize > 680 ? 4 : screenSize > 410 ? 3 : 2;

    let b: number = -1;
    for (let i: number = 0; i < length; i++) {
      console.log(i);
      const randomNumber: number = Math.round(
        Math.random() * (companies.length - 1)
      );

      if (randomNumber !== b && !a.includes(companies[randomNumber])) {
        a.push(companies[randomNumber]);
        b = randomNumber;
      } else {
        i = i > 0 ? i - 1 : 0;
      }
    }

    return a;
  };

  const changeCompanies = (screenSize: number): NodeJS.Timeout => {
    const updatedArr = generateArray(screenSize);
    changeArray(updatedArr);

    const countOfItems: number =
      screenSize > 1024 ? 6 : screenSize > 680 ? 4 : screenSize > 410 ? 3 : 2;
    let counter = 0;
    const interval: NodeJS.Timeout = setInterval(() => {
      let randomIndex: number = Math.round(Math.random() * (countOfItems - 1));

      const randomCompanyIndex: number = Math.round(
        Math.random() * (companies.length - 1)
      );

      if (hideIndex === randomIndex) {
        randomIndex = Math.round(Math.random() * (countOfItems - 1));
      }

      const newArr =
        array.length !== 0
          ? array.map((e, i) => {
              if (
                i == randomIndex &&
                !array.includes(companies[randomCompanyIndex])
              ) {
                e = companies[randomCompanyIndex];

                return e;
              }
              return e;
            })
          : updatedArr.map((e, i) => {
              if (
                i == randomIndex &&
                !updatedArr.includes(companies[randomCompanyIndex])
              ) {
                e = companies[randomCompanyIndex];
                return e;
              }
              return e;
            });

      const include: boolean =
        array.length > 0
          ? array.includes(companies[randomCompanyIndex])
          : updatedArr.includes(companies[randomCompanyIndex]);

      if (!include) {
        changeHideIndex(randomIndex);
        setTimeout(() => changeArray(newArr), 300);
        setTimeout(() => changeHideIndex(-1), 1000);
        counter++;
      }
    }, 5300);

    return interval;
  };

  return (
    <div className={styles.companiesWrapper}>
      {array.map((item: string, index: number) => (
        <div
          key={index}
          className={classNames(
            styles.logoWrapper,
            hideIndex == index && styles.opacity
          )}
        >
          <img src={item} className={styles.logo}></img>
        </div>
      ))}
    </div>
  );
};

export default CompaniesContainer;
