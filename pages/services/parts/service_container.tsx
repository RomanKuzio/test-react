import { useEffect, useState } from "react";
import Button from "../../../components/button";
import { IServiceProps } from "../../../constants";
import styles from "../index.module.scss";
import SquareBlock from "./shared_components";
import RowBlock from "./row_block";

interface IProps {
  service: IServiceProps;
  reverse?: boolean;
  index: number;
}

const ServiceContainer = ({ service, reverse, index }: IProps) => {
  const { logo, title, description, additionalData, bottomSection } = service;
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

  const renderBottomSection = () => {
    {
      return additionalData && bottomSection ? (
        <div className={styles.bottomSectionWrapper}>
          {additionalData.map((item, index) => (
            <SquareBlock data={item} width={width} small key={index} />
          ))}
        </div>
      ) : null;
    }
  };

  if (index == 4) {
    return (
      <div className={styles.serviceWrapper}>
        <div className={styles.centerTitleWrapper}>
          <span className={styles.title}>{title}</span>
          <span
            style={{ textAlign: "center", margin: "3rem 0 4rem" }}
            className={styles.description}
          >
            {description}
          </span>
        </div>

        <div
          className={styles.mainSection}
          style={{ flexDirection: width > 680 ? "row" : "column" }}
        >
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo}></img>
          </div>
          <div className={styles.descriptionWrapper}>
            <div style={{ width: "100%", marginTop: 40, marginBottom: 40 }}>
              {" "}
              {additionalData.map((item, index) => (
                <RowBlock data={item} key={index} />
              ))}
            </div>
            <Button
              style={styles.button}
              text="REQUEST A SERVICE"
              action={() => console.log("REQUEST")}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.serviceWrapper}>
      <div
        className={styles.mainSection}
        style={{
          flexDirection:
            width > 680 ? (reverse ? "row-reverse" : "row") : "column",
        }}
      >
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logo}></img>
        </div>

        <div className={styles.descriptionWrapper}>
          <span className={styles.title}>{title}</span>
          <span
            className={styles.description}
            style={
              width > 680
                ? {
                    margin:
                      index == 2 || index == 1
                        ? "3.125rem 0 1rem"
                        : "3.125rem 0 4.375rem",
                  }
                : null
            }
          >
            {description}
          </span>
          {additionalData && (index === 1 || index === 4) ? (
            <div
              style={{
                width: "100%",
                margin: width > 680 ? "20px  0 3.125rem" : "40px 0",
              }}
            >
              {additionalData.map((item, index) => (
                <RowBlock data={item} key={index} />
              ))}
            </div>
          ) : null}
          {index == 2 ? (
            <span className={styles.additionalText}>
              *HPD Administering Agent services provided by Rentability, a
              nonprofit entity founded by one of City5's principals.
            </span>
          ) : null}
          {additionalData && index == 2 ? (
            <div className={styles.rowsWrapper}>
              {additionalData.map((item, index) => {
                return width > 1380 ? (
                  <SquareBlock width={width} key={index} data={item} />
                ) : (
                  <RowBlock key={index} data={item} />
                );
              })}
            </div>
          ) : null}
          {width < 680 ? renderBottomSection() : null}
          <Button
            style={styles.button}
            text="REQUEST A SERVICE"
            action={() => console.log("REQUEST")}
          />
        </div>
      </div>
      {width > 680 ? renderBottomSection() : null}
    </div>
  );
};

export default ServiceContainer;
