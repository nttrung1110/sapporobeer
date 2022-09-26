import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import svgs from "~/assets/svgs";
import Header from "../components/Header";
import styles from "./Home.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const Home = () => {
  const [mvRef, mvInView] = useInView({ triggerOnce: true });
  const [productRef, productInView] = useInView({ triggerOnce: true });

  return (
    <main className={cx("layout-main")}>
      <Header />
      <section
        ref={mvRef}
        className={cx("mv", { active: mvInView && "active" })}
      >
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

      <section
        ref={productRef}
        className={cx("product", { active: productInView && "active" })}
      >
        <h2 className={cx("title")}>
          <img src={svgs.product_h2} alt="" />
        </h2>
        <div className={cx("lead")}>
          <span className={cx("one")}>
            <i>
              <img src={svgs.product_lead1} alt="" width="366" />
            </i>
          </span>

          <span className={cx("two")}>
            <i>
              <img src={svgs.product_lead2} alt="" width="471" />
            </i>
          </span>

          <span className={cx("three")}>
            <i>
              <img src={svgs.product_lead3} alt="" width="319" />
            </i>
          </span>
        </div>
        <div className={cx("content")}>
          <div className={cx("text")}>
            <img className={cx("line1")} src={svgs.product_txt1} alt="" />
            <img className={cx("line2")} src={svgs.product_txt2} alt="" />
            <img className={cx("line3")} src={svgs.product_txt3} alt="" />
            <img className={cx("line4")} src={svgs.product_txt4} alt="" />
            <img className={cx("line5")} src={svgs.product_txt5} alt="" />
            <img className={cx("line6")} src={svgs.product_txt6} alt="" />
            <img className={cx("line7")} src={svgs.product_txt7} alt="" />
          </div>
          <div className={cx("image")}>
            <img className={cx("img1")} src={images.product_obj} alt="" />
            <img className={cx("img2")} src={svgs.product_obj_txt} alt="" />
          </div>
        </div>
        <div className={cx("box")}>box</div>
      </section>
    </main>
  );
};

export default Home;
