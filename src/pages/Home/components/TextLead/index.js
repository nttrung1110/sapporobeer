import classNames from "classnames/bind";
import styles from "./TextLead.module.scss";

const cx = classNames.bind(styles);

const TextLead = ({
  data,
  isActive = false,
  isAnimate = true,
  isScene = false,
}) => {
  return (
    <div
      className={cx("lead", {
        active: isActive && "active",
        animate: isAnimate && "animate",
        scene: isScene && "scene",
      })}
    >
      {data.map((item, index) => (
        <span
          key={index}
          className={cx({
            last: data.length - 1 === index,
          })}
        >
          <i>
            <img src={item.src} alt="" width={item.width} />
          </i>
        </span>
      ))}
    </div>
  );
};

export default TextLead;
