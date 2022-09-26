import classNames from "classnames/bind";
import Header from "../components/Header";
import styles from "./Home.module.scss";
import svgs from "~/assets/svgs";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("layout-main")}>
      <Header />

      <section className={cx("mv")}>
        <div className={cx("tv")}>
          <video
            src="https://res.cloudinary.com/cygames-magazine/video/upload/v1664111973/sapporobeer/mv_isycqi.mp4"
            type="video/webm"
            autoPlay
            muted
            loop
          />
          <div className={cx("bottom")}></div>
        </div>
        <img src={svgs.mv_txt} alt="" />
      </section>

      <section className={cx("product")}></section>
    </main>
  );
};

export default Home;
