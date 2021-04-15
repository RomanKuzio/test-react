import Button from "../../components/button";
import styles from "./index.module.scss";
import ProgressIndicator from "../../components/progress-bar";
import { useState, useEffect } from "react";

const VideoSectionContent = ({
  scrollToContactUs,
}: {
  scrollToContactUs: () => void;
}) => {
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
    <div className={styles.videoSectionWrapper}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <span className={styles.title}>
            Powered by
            <br />
            ComplyBuddy Software
          </span>
          <span className={styles.description}>
            NYC Real Estate Compliance made easy with Compliance Automation,
            case management, and comprehensive reporting. Schedule a Demo or to
            find out whats happening, check out our Latest News.
          </span>
          <Button
            style={styles.button}
            text="CONTACT US"
            action={scrollToContactUs}
          ></Button>
          <div className={styles.indicatorsWrappers}>
            <ProgressIndicator
              withMargin
              count="1"
              percentage={60}
              nomination="M"
              description={[
                "More than ",
                "1 Million\n",
                "violations monitored",
              ]}
              dataStyle={styles.indicatorData}
              descriptionStyle={styles.indicatorDescription}
            />
            <ProgressIndicator
              withMargin
              count="10"
              percentage={60}
              nomination="K"
              description={["More than ", "10,000 cases\n", "managed"]}
              dataStyle={styles.indicatorData}
              descriptionStyle={styles.indicatorDescription}
            />
            {width > 680 && (
              <ProgressIndicator
                withMargin
                count="100"
                percentage={60}
                nomination="M"
                description={[
                  "100 Million",
                  "",
                  "in Property Tax\nExemption Savings",
                ]}
                dataStyle={styles.indicatorData}
                descriptionStyle={styles.indicatorDescription}
              />
            )}
          </div>
          <div
            className={styles.indicatorsWrappers}
            style={{
              justifyContent: "center",
              marginTop: 0,
              paddingLeft: width > 680 ? 75 : 25,
            }}
          >
            {width < 680 && (
              <ProgressIndicator
                count="100"
                percentage={60}
                nomination="M"
                description={[
                  "100 Million",
                  "",
                  "in Property Tax\nExemption Savings",
                ]}
                dataStyle={styles.indicatorData}
                descriptionStyle={styles.indicatorDescription}
              />
            )}
          </div>
        </div>
        <div className={styles.rightSide}>
          {/* <img src="images/playIcon.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoSectionContent;
