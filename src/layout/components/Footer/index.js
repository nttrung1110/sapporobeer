import classNames from "classnames/bind";
import Breadcrumb from "~/components/Breadcrumb";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("layout-footer")}>
      <div className={cx("inner")}>
        <Breadcrumb />
      </div>
    </footer>
  );
};

export default Footer;
