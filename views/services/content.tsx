import { useEffect, useState } from "react";
import Button from "../../components/button";
import { IServiceProps, servicesList } from "../../constants";
import styles from "./index.module.scss";
import ServiceContainer from "./parts/service_container";
import ModalWindow from "../../components/modal";
import RequestServiceContent from "./parts/request_service_modal_content";

const ServicesContent = () => {
  const [width, setWindowWidth] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
      <ModalWindow
        isOpen={showModal}
        onClose={() => console.log("close")}
        content={<RequestServiceContent onClose={() => setShowModal(false)} />}
        width={width}
      />
      {servicesList.map((item: IServiceProps, index: number) => (
        <ServiceContainer
          key={index}
          service={item}
          reverse={index % 2 != 0}
          index={index}
          width={width}
          openModal={() => setShowModal(true)}
        />
      ))}
    </div>
  );
};

export default ServicesContent;
