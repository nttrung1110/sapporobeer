import classNames from "classnames/bind";
import styles from "./TextTitle.module.scss";

const cx = classNames.bind(styles);

const TextTitle = ({ data }) => {
  return (
    <h2 className={cx("title")}>
      <img src={data.src} alt="" width={data.width} />
    </h2>
  );
};

export default TextTitle;
