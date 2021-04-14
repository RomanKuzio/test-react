import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Button from "../../../components/button";
import Dropdown from "../../../components/dropdown";
import Input from "../../../components/input";
import TextArea from "../../../components/text-area";
import styles from "../index.module.scss";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.modalFormWrapper}>
      <Dropdown title="I'm interested in" onChange={(e) => e} placeholder="" />
      <Input
        onChange={(v) => console.log(v)}
        placeholder="E.g.john.anderson@exapmle.com"
        title="Your Email"
        name="email"
      />
      <Input
        onChange={(v) => console.log(v)}
        placeholder="000-000-000"
        title="Phone Number"
        name="email"
      />
      <TextArea
        onChange={(v) => console.log(v)}
        placeholder="Enter your message"
        title="Message"
      />
      <div className={styles.buttonsWrapper}>
        <Button style={styles.cancelButton} action={onClose} text="CANCEL" />
        <Button action={() => console.log("send")} text="SEND" />
      </div>
    </div>
  );
};

const RequestServiceContent = ({ onClose }: { onClose: () => void }) => {
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
  return (
    <div className={styles.modalWrapper}>
      <FontAwesomeIcon
        icon={faTimes}
        color={"#fff"}
        onClick={onClose}
        className={styles.closeIcon}
      />
      <div className={styles.leftSide}>
        <div className={styles.header}>
          <span className={styles.title}>Request a service</span>
          <span className={styles.subtitle}>
            Let us know how we can help and we will contact you
          </span>
        </div>
        <ModalForm onClose={onClose} />
      </div>
      {width > 1024 && (
        <div className={styles.modalImage}>
          <img src="images/modalImage.jpg"></img>
        </div>
      )}
    </div>
  );
};

export default RequestServiceContent;
