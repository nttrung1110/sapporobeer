import classNames from "classnames/bind";
import svgs from "~/assets/svgs";
import TextLead from "../TextLead";
import styles from "./SceneBlock.module.scss";
import { useInView } from "react-intersection-observer";

const cx = classNames.bind(styles);

const SceneBlock = ({
  scenePosition,
  gif,
  leads,
  txts,
  sub,
  left = false,
  right = false,
}) => {
  const [sceneRef, sceneInView] = useInView({ triggerOnce: true });

  return (
    <li
      ref={sceneRef}
      className={cx("block", { left, right, active: sceneInView && "active" })}
    >
      <figure className={cx(scenePosition)}>
        <a href="/">
          <img src={gif} alt="" />
        </a>
      </figure>
      <article className={cx(scenePosition)}>
        <div className={cx("bg")}></div>
        <div className={cx("play-btn")}>
          <img
            src={right ? svgs.scene_play : svgs.scene_play2}
            alt=""
            width="204"
          />
        </div>
        <div className={cx("lead")}>
          <TextLead data={leads} isAnimate={false} isScene={true} />
        </div>
        <div className={cx("text")}>
          {txts.map((item, index) => (
            <span key={index}>
              <img src={item.src} alt="" width={item.width} />
            </span>
          ))}
        </div>
        <div className={cx("sub")}>
          <img src={sub.src} alt="" width={sub.width} />
        </div>
      </article>
    </li>
  );
};

export default SceneBlock;
