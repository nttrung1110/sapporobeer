import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import icons from "~/assets/icons";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  const [playAudio, setPlayAudio] = useState(false);

  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    setPlayAudio((prev) => !prev);
  };

  useEffect(() => {
    if (playAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playAudio]);

  return (
    <section className={cx("header")}>
      <div className={cx("inner")}>
        <h1 className={cx("logo")}>
          <img src={icons.logo} alt="" />
        </h1>
        <ul className={cx("nav-wrapper")}>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={icons.nav_1} alt="" width={38} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={icons.nav_2} alt="" width={95} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={icons.nav_3} alt="" width={65} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={icons.nav_4} alt="" width={48} />
            </Link>
          </li>
          <li
            className={cx("sound", {
              play: playAudio && "play",
            })}
            onClick={handlePlayAudio}
          >
            <img src={icons.sound} alt="" width={23} />
            <audio loop autoPlay ref={audioRef}>
              <source
                src="https://res.cloudinary.com/cygames-magazine/video/upload/v1664117308/sapporobeer/bgm_wr08e4.mp4"
                type="audio/mp3"
              ></source>
            </audio>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
