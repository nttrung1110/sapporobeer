import classNames from "classnames/bind";
import { Fragment, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import svgs from "~/assets/svgs";
import {
  toggleAudio,
  toggleLayoutAudio,
  toggleOverLay,
} from "~/redux/layoutSlice";
import ModalMovie from "../ModalMovie";
import TextLead from "../TextLead";
import styles from "./SceneBlock.module.scss";

const cx = classNames.bind(styles);

const SceneBlock = ({
  scenePosition,
  gif,
  leads,
  txts,
  sub,
  left = false,
  right = false,
  videoId,
  videoTitle,
}) => {
  const [sceneRef, sceneInView] = useInView({ triggerOnce: true });

  const [playVideo, setPlayVideo] = useState(false);

  const { playAudio, layoutAudio } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const handlePlay = () => {
    setPlayVideo(true);
    dispatch(toggleOverLay(true));

    document.body.style.overflow = "hidden";

    if (playAudio) {
      dispatch(toggleAudio(false));
      dispatch(toggleLayoutAudio(true));
    }
  };

  const handleClose = () => {
    setPlayVideo(false);
    dispatch(toggleOverLay(false));

    document.body.style.overflow = "";

    if (layoutAudio) {
      dispatch(toggleAudio(true));
    }
  };

  return (
    <Fragment>
      <li
        ref={sceneRef}
        className={cx("block", {
          left,
          right,
          active: sceneInView && "active",
        })}
      >
        <figure className={cx(scenePosition)}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a video-id={videoId} onClick={handlePlay}>
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

      {playVideo && (
        <ModalMovie
          videoId={videoId}
          videoTitle={videoTitle}
          handleClose={handleClose}
        />
      )}
    </Fragment>
  );
};

export default SceneBlock;
