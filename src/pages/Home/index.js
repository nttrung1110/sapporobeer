import classNames from "classnames/bind";
import Header from "../components/Header";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("layout-main")}>
      <Header />
    </main>
  );
};

export default Home;
