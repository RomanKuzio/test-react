import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState, useEffect } from "react";
import Button from "../button";
// import Logo from '../../public/images/logo.png'
import styles from "./index.module.scss";
const Header = ({ scrollToContactUs }: { scrollToContactUs: () => void }) => {
  const [width, setWindowWidth] = useState(0);
  const [menu, setMenuStatus] = useState(false);
  const [header, setHeaderStatus] = useState(true);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const menuStatus = (data: boolean) => {
    setMenuStatus(data);
  };

  const updateScroll = (event) => {
    console.log(window.pageYOffset, "HEIGHT");
    console.log(header, "HEADER");
    console.log(window.pageYOffset == 0 && !header, "DATA");

    if (window.pageYOffset == 0) {
      checkScroll(true);
    } else {
      checkScroll(false);
    }
  };

  const checkScroll = (data: boolean) => {
    setHeaderStatus(data);
  };

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const renderDrawerButton = () => {
    console.log(menu);
    return (
      <svg
        className={classNames(
          styles.ham,
          menu ? styles.active : null,
          styles.hamRotate,
          styles.ham1
        )}
        viewBox="0 0 100 100"
        width="80"
        onClick={() => {
          menuStatus(!menu);
        }}
      >
        <path
          className={classNames(styles.line, styles.top)}
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path
          className={classNames(styles.line, styles.middle)}
          d="m 30,50 h 40"
        />
        <path
          className={classNames(styles.line, styles.bottom)}
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
    );
  };

  return (
    <div
      className={classNames(
        styles.headerWrapper,
        header ? styles.scrollTop : styles.scrollDown
      )}
    >
      {width < 680 ? renderDrawerButton() : null}
      <img className={styles.logo} src="images/logo.png"></img>
      <div className={styles.contactSection}>
        {width > 680 ? (
          <span className={styles.phoneNumber}>(212) 571-3003</span>
        ) : null}
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faSearch}
          color="#ffffff"
        />
        {width > 680 ? (
          <Button
            style={styles.contactButton}
            text="CONTACT US"
            action={() => {
              scrollToContactUs();
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
