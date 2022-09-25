import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return <div className={cx("wrapper")}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
