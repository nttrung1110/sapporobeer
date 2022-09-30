/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from "classnames/bind";
import { animateScroll as scroll } from "react-scroll";
import styles from "./ScrollToTop.module.scss";

const cx = classNames.bind(styles);

const ScrollToTop = ({ showPageTop }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: true,
    });
  };

  return (
    <div className={cx("page-top", { active: showPageTop && "active" })}>
      <a href="#top" onClick={scrollToTop}></a>
    </div>
  );
};

export default ScrollToTop;
