import classNames from "classnames/bind";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import { toggleOverLay } from "~/redux/layoutSlice";
import styles from "./Dropdown.module.scss";

const cx = classNames.bind(styles);

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Link
        to="/"
        className={cx("button", {
          active: showMenu && "active",
        })}
        onMouseEnter={() => {
          setShowMenu(true);
          dispatch(toggleOverLay(true));
        }}
        onMouseLeave={() => {
          setShowMenu(false);
          dispatch(toggleOverLay(false));
        }}
      >
        商品情報
      </Link>
      <div
        className={cx("menu", {
          active: showMenu && "active",
        })}
        onMouseEnter={() => {
          setShowMenu(true);
          dispatch(toggleOverLay(true));
        }}
        onMouseLeave={() => {
          setShowMenu(false);
          dispatch(toggleOverLay(false));
        }}
      >
        <div className={cx("wrapper")}>
          <div
            className={cx("inner", {
              active: showMenu && "active",
            })}
          >
            <div className={cx("title")}>商品カテゴリ別ブランド一覧</div>
            <div className={cx("content")}>
              <div className={cx("left")}>
                <ul>
                  <li>
                    <Link to="/">
                      <img src={images.product_9} alt="" />
                      <p>ビールテイスト</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={images.product_10} alt="" />
                      <p>チューハイ・サワー</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={images.product_11} alt="" />
                      <p>ワイン</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={images.product_12} alt="" />
                      <p>焼酎</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={images.product_13} alt="" />
                      <p>
                        国産スピリッツ＆リキュール
                        <br />
                        (梅酒含む)
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={images.product_14} alt="" />
                      <p>
                        輸入スピリッツ＆リキュール
                        <br />
                        (ウイスキー含む)
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={cx("right")}>
                <ul>
                  <li>
                    <Link to="/">
                      <p>国外販売商品</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>飲食店専用商品</p>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/">
                      <p>栄養成分一覧</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>製造終了商品</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dropdown;
