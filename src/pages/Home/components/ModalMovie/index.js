import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import styles from "./ModalMovie.module.scss";

const cx = classNames.bind(styles);

const ModalMovie = ({ videoId, videoTitle, handleClose }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose, wrapperRef]);

  return (
    <div ref={wrapperRef} className={cx("wrapper")}>
      <div className={cx("close")} onClick={handleClose}></div>
      <iframe
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={videoTitle}
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&widgetid=2&playlist=${videoId}&playsinline=1&showinfo=0&fs=0&mute=0&enablejsapi=1&origin=https%3A%2F%2Fwww.sapporobeer.jp`}
      ></iframe>
    </div>
  );
};

export default ModalMovie;
