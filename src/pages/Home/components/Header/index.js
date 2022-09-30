import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import svgs from "~/assets/svgs";
import { toggleAudio, toggleLayoutAudio } from "~/redux/layoutSlice";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  const { playAudio } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    dispatch(toggleAudio(!playAudio));
    dispatch(toggleLayoutAudio(!playAudio));
  };

  useEffect(() => {
    if (playAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [dispatch, playAudio]);

  const [fixed, setFixed] = useState(false);

  const isFixed = (e) => {
    const scrollTop = window.scrollY;

    scrollTop > 115 ? setFixed(true) : setFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isFixed);
    return () => {
      window.removeEventListener("scroll", isFixed);
    };
  });

  return (
    <section className={cx("header", { fixed: fixed && "fixed" })}>
      <div className={cx("inner")}>
        <h1 className={cx("logo")}>
          <img src={svgs.logo} alt="" />
        </h1>
        <ul className={cx("nav-wrapper")}>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={svgs.nav_1} alt="" width={38} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={svgs.nav_2} alt="" width={95} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={svgs.nav_3} alt="" width={65} />
            </Link>
          </li>
          <li className={cx("nav-item")}>
            <Link to="/">
              <img src={svgs.nav_4} alt="" width={48} />
            </Link>
          </li>
          <li
            className={cx("sound", {
              play: playAudio && "play",
            })}
            onClick={handlePlayAudio}
          >
            <img src={svgs.sound} alt="" width={23} />
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
