import classNames from "classnames/bind";
import styles from "./FaqBlock.module.scss";

import svgs from "~/assets/svgs";

const cx = classNames.bind(styles);

const FaqBlock = ({ q_svg, q_title, a_text }) => {
  return (
    <dl className={cx("block")}>
      <dt>
        <span>
          <img src={q_svg} alt="" />
        </span>
        {q_title}
      </dt>
      <dd>
        <span>
          <img src={svgs.a} alt="" />
        </span>
        {a_text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </dd>
    </dl>
  );
};

export default FaqBlock;
