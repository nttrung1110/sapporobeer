import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  const { showOverlay } = useSelector((state) => state.layout);

  return (
    <div className={cx("wrapper")}>
      <Header />

      {children}

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
