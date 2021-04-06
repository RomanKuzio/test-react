import { useEffect, useState } from "react";
import Button from "../../components/button";
import { IServiceProps, servicesList } from "../../constants";
import styles from "./index.module.scss";
import ServiceContainer from "./parts/service_container";

const ServicesContent = () => {
  const [width, setWindowWidth] = useState(0);
  const [full, setFull] = useState(false);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className={styles.servicesWrapper}>
      {servicesList.map((item: IServiceProps, index: number) => (
        <ServiceContainer
          key={index}
          service={item}
          reverse={index % 2 != 0}
          index={index}
          width={width}
        />
      ))}
    </div>
  );
};

export default ServicesContent;
