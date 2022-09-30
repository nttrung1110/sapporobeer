import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import images from "~/assets/images";
import svgs from "~/assets/svgs";
import Breadcrumb from "~/components/Breadcrumb";
import ScrollToTop from "~/components/ScrollToTop";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  const [breadcrumbRef, breadcrumbInView] = useInView();

  return (
    <footer className={cx("layout-footer")}>
      <div className={cx("inner")}>
        <Breadcrumb breadcrumbRef={breadcrumbRef} />
        <div className={cx("logo")}>
          <a href="/">
            <img src={svgs.logo_main} alt="" width="95" height="120" />
          </a>
        </div>
        <ScrollToTop showPageTop={!breadcrumbInView} />
        <div className={cx("links")}>
          <div className={cx("nav")}>
            <ul>
              <li>
                <a href="/">商品情報</a>
              </li>
              <li>
                <a href="/">CM・動画</a>
              </li>
              <li>
                <a href="/">エンタメ</a>
              </li>
              <li>
                <a href="/">レシピ</a>
              </li>
              <li>
                <a href="/">工場見学・ミュージアム</a>
              </li>
              <li>
                <a href="/">キャンペーン</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">企業情報</a>
              </li>
              <li>
                <a href="/">採用情報</a>
              </li>
              <li>
                <a href="/">マイアカウント</a>
              </li>
              <li>
                <a href="/">会員規約</a>
              </li>
              <li>
                <a href="/">お客様サポート</a>
              </li>
              <li>
                <a href="/">飲食店様サポート</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">ご利用規約</a>
              </li>
              <li>
                <a href="/">快適なご利用のために</a>
              </li>
              <li>
                <a href="/">プライバシーポリシー</a>
              </li>
              <li>
                <a href="/">アクセシビリティポリシー</a>
              </li>
              <li>
                <a href="/">公式アカウントコミュニケーションガイドライン</a>
              </li>
            </ul>
          </div>
          <div className={cx("sns")}>
            <ul>
              <li>
                <a href="/">
                  <img
                    src={svgs.sns_img_facebook}
                    alt=""
                    width="11"
                    height="22"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src={svgs.sns_img_twitter}
                    alt=""
                    width="22"
                    height="18"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src={svgs.sns_img_youtube}
                    alt=""
                    width="25"
                    height="18"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src={svgs.sns_img_instagram}
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
              </li>
            </ul>
            <a href="/" className={cx("note")}>
              サッポロビールソーシャルメディア公式アカウント
            </a>
          </div>
          <div className={cx("group")}>
            <ul>
              <li>
                <a href="/">サッポロビール株式会社</a>
              </li>
              <li>
                <a href="/">サッポロホールディングス</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx("lower")}>
        <div className={cx("inner")}>
          <div className={cx("note")}>
            <img
              src={images.footer_note_img01}
              alt=""
              width="475"
              height="36"
            />
          </div>
          <div className={cx("copyright")}>
            <img
              src={svgs.footer_copyright_logo01}
              alt=""
              width="182"
              height="16"
            />
            ©SAPPORO BREWERIES LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
