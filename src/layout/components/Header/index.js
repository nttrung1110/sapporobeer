import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import Dropdown from "../Dropdown";
import Search from "../Search";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("layout-header")}>
      <Link to="/">
        <img className={cx("logo")} src={images.logo} alt="logo" />
      </Link>
      <nav className={cx("nav-container")}>
        <div className={cx("nav-sub")}>
          <ul>
            <li>
              <Link to="/">お客様サポート</Link>
            </li>
            <li>
              <Link to="/">飲食店様サポート</Link>
            </li>
            <li>
              <Link to="/">English</Link>
            </li>
            <li>
              <Link to="/">サッポロホールディングス</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>
        <div className={cx("nav-main")}>
          <ul className={cx("nav-categories")}>
            <li className={cx("nav-category")}>
              <Dropdown />
            </li>
            <li className={cx("nav-category")}>
              <Link to="/" className={cx("nav-link")}>
                CM・動画
              </Link>
            </li>
            <li className={cx("nav-category")}>
              <Link to="/" className={cx("nav-link")}>
                エンタメ
              </Link>
            </li>
            <li className={cx("nav-category")}>
              <Link to="/" className={cx("nav-link")}>
                レシピ
              </Link>
            </li>
            <li className={cx("nav-category")}>
              <Link to="/" className={cx("nav-link")}>
                工場見学・ミュージアム
              </Link>
            </li>
            <li className={cx("nav-category")}>
              <Link to="/" className={cx("nav-link")}>
                キャンペーン
              </Link>
            </li>
            <li className={cx("myaccount")}>
              <Link to="/" className={cx("nav-link")}>
                マイアカウント
              </Link>
            </li>
            <li className={cx("company")}>
              <Link to="/" className={cx("nav-link")}>
                企業情報
              </Link>
            </li>
            <li className={cx("employment")}>
              <Link to="/" className={cx("nav-link")}>
                採用情報
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
