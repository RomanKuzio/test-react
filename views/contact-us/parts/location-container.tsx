import { useState, useEffect } from "react";
import styles from "../index.module.scss";

const LocationContainer = () => {
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
    <div className={styles.locationWrapper}>
      {width < 680 && <span className={styles.title}>Contact Us</span>}
      <img src="images/map.png" />
      <div className={styles.infoWrapper}>
        {width > 680 && <span className={styles.title}>Contact Us</span>}
        <div className={styles.addressWrapper}>
          <div className={styles.infoBlock}>
            <span>
              {width < 680 && (
                <span
                  style={{
                    marginRight: 15,
                    color: "#575F6A",
                    fontWeight: 400,
                    fontSize: "1rem",
                    opacity: 0.3,
                  }}
                >
                  Address
                </span>
              )}
              1115 Brodway, 10th Floor
            </span>
            <span style={{ marginLeft: width < 680 ? 70 : 0 }}>
              New York, NY 10010,(p)
            </span>
            <span style={{ marginLeft: width < 680 ? 70 : 0 }}>
              212.571.3003
            </span>
          </div>
          <div className={styles.infoBlock}>
            <span>
              {width < 680 && (
                <span
                  style={{
                    marginRight: 25,
                    color: "#575F6A",
                    fontWeight: 400,
                    fontSize: "1rem",
                    opacity: 0.3,
                  }}
                >
                  Phone
                </span>
              )}
              490 (212) 571-3003
            </span>
            <span>
              {width < 680 && (
                <span
                  style={{
                    marginRight: 30,
                    color: "#575F6A",
                    fontWeight: 400,
                    fontSize: "1rem",
                    opacity: 0.3,
                  }}
                >
                  Email
                </span>
              )}
              info@example.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
