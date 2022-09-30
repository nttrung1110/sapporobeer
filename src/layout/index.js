import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  const { showOverlay } = useSelector((state) => state.layout);

  return (
    <div className={cx("wrapper")}>
      <Header />

      {children}

      <Footer />

      <div
        className={cx("overlay", {
          active: showOverlay && "active",
        })}
      ></div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
