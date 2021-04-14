import Button from "../../components/button";
import HomeContent from "./content";
import styles from "./index.module.scss";

const Home = ({ scrollToContactUs }: { scrollToContactUs: () => void }) => {
  return (
    <>
      <HomeContent scrollToContactUs={scrollToContactUs} />
    </>
  );
};

export default Home;
