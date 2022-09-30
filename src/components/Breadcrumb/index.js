import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./Breadcrumb.module.scss";

const cx = classNames.bind(styles);

const Breadcrumb = ({ breadcrumbRef }) => {
  return (
    <div ref={breadcrumbRef} className={cx("breadcrumb")}>
      <ul>
        <li>
          <a href="/">
            <img src={images.breadcrumbs_img01} alt="" />
            ホーム
          </a>
        </li>
        <li>
          <a href="/">商品情報</a>
        </li>
        <li>レモンズフリー</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
