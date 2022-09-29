import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";
import gifs from "~/assets/gifs";
import images from "~/assets/images";
import svgs from "~/assets/svgs";
import FaqBlock from "./components/FaqBlock";
import Header from "./components/Header";
import SceneBlock from "./components/SceneBlock";
import TextLead from "./components/TextLead";
import TextTitle from "./components/TextTitle";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  const [mvRef, mvInView] = useInView({ triggerOnce: true });
  const [productRef, productInView] = useInView({ triggerOnce: true });
  const [boxRef, boxInView] = useInView({ triggerOnce: true });
  const [buyRef, buyInView] = useInView({ triggerOnce: true });

  return (
    <main className={cx("layout-main")}>
      <Header />

      <section
        ref={mvRef}
        className={cx("mv", { active: mvInView && "active" })}
      >
        <div className={cx("tv")}>
          <video
            src="https://res.cloudinary.com/cygames-magazine/video/upload/v1664111973/sapporobeer/mv_isycqi.mp4"
            type="video/webm"
            autoPlay
            muted
            loop
          />
          <div className={cx("bottom")}></div>
        </div>
        <img src={svgs.mv_txt} alt="" />
      </section>

      <section
        ref={productRef}
        className={cx("product", { active: productInView && "active" })}
      >
        <TextTitle data={{ src: svgs.product_h2, width: "372" }} />

        <TextLead
          data={[
            { src: svgs.product_lead1, width: "366" },
            { src: svgs.product_lead2, width: "471" },
            { src: svgs.product_lead3, width: "319" },
          ]}
          isActive={productInView}
        />

        <div className={cx("content")}>
          <div className={cx("text")}>
            <img className={cx("line1")} src={svgs.product_txt1} alt="" />
            <img className={cx("line2")} src={svgs.product_txt2} alt="" />
            <img className={cx("line3")} src={svgs.product_txt3} alt="" />
            <img className={cx("line4")} src={svgs.product_txt4} alt="" />
            <img className={cx("line5")} src={svgs.product_txt5} alt="" />
            <img className={cx("line6")} src={svgs.product_txt6} alt="" />
            <img className={cx("line7")} src={svgs.product_txt7} alt="" />
          </div>

          <div className={cx("image")}>
            <img className={cx("img1")} src={images.product_obj} alt="" />
            <img className={cx("img2")} src={svgs.product_obj_txt} alt="" />
          </div>
        </div>

        <div
          ref={boxRef}
          className={cx("box", { active: boxInView && "active" })}
        >
          <img src={svgs.product_box} alt="" />
          <p>
            機能性関与成分：クエン酸2700mg(350ml当たり) …
            クエン酸は日常生活や運動後の一時的な疲労感を軽減することが報告されています。
          </p>
        </div>

        <div
          ref={buyRef}
          className={cx("buy", { active: buyInView && "active" })}
        >
          <p>購入はこちらから!</p>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={svgs.bnr} alt="" width="462" />
          </a>
        </div>
      </section>

      <section className={cx("scene")}>
        <TextTitle data={{ src: svgs.scene_h2, width: "253" }} />

        <ul>
          <SceneBlock
            scenePosition={"scene1"}
            gif={gifs.scene1}
            leads={[
              { src: svgs.scene1_lead1, width: "347" },
              { src: svgs.scene1_lead2, width: "347" },
            ]}
            txts={[
              { src: svgs.scene1_txt1, width: "502" },
              { src: svgs.scene1_txt2, width: "605" },
            ]}
            sub={{ src: svgs.scene1_sub, width: "63" }}
            right={true}
            videoId={"u-UImm0uS-s"}
            videoTitle={"サッポロ LEMON'S FREE　「リモートワーク篇」　15秒"}
          />

          <SceneBlock
            scenePosition={"scene2"}
            gif={gifs.scene2}
            leads={[
              { src: svgs.scene2_lead1, width: "290" },
              { src: svgs.scene2_lead2, width: "379" },
            ]}
            txts={[
              { src: svgs.scene2_txt1, width: "440" },
              { src: svgs.scene2_txt2, width: "548" },
            ]}
            sub={{ src: svgs.scene2_sub, width: "63" }}
            left={true}
            videoId={"Zn672p2xnNI"}
            videoTitle={"サッポロ LEMON'S FREE　「帰宅篇」　15秒"}
          />

          <SceneBlock
            scenePosition={"scene3"}
            gif={gifs.scene3}
            leads={[
              { src: svgs.scene3_lead1, width: "336" },
              { src: svgs.scene3_lead2, width: "162" },
              { src: svgs.scene3_lead3, width: "307" },
            ]}
            txts={[
              { src: svgs.scene3_txt1, width: "477" },
              { src: svgs.scene3_txt2, width: "529" },
            ]}
            sub={{ src: svgs.scene3_sub, width: "63" }}
            right={true}
            videoId={"_FoD88w_F6I"}
            videoTitle={"サッポロ LEMON'S FREE　「寝る前篇」　15秒"}
          />
        </ul>
      </section>

      <section className={cx("faq")}>
        <TextTitle data={{ src: svgs.faq_h2, width: "190" }} />

        <FaqBlock
          q_svg={svgs.q1}
          q_title={"いつ飲むのが効果的ですか？"}
          a_text={["飲むタイミングは特に決まっておりません。"]}
        />

        <FaqBlock
          q_svg={svgs.q2}
          q_title={"1日の摂取目安量を教えてください。"}
          a_text={["1日1回1本を目安にお飲みください。"]}
        />

        <FaqBlock
          q_svg={svgs.q3}
          q_title={"「機能性表示食品」とは何ですか？"}
          a_text={[
            "「機能性表示食品」とは、事業者の責任において科学的根拠に基づいた機能性を表示した食品のことです。",
            "国が定めるルールに基づき、販売前に安全性及び機能性の根拠に関する情報などが消費者庁長官へ届け出られたものです。",
          ]}
        />

        <FaqBlock
          q_svg={svgs.q4}
          q_title={"「特定保健用食品（トクホ）」とは何ですか？"}
          a_text={[
            "健康の維持増進に役立つことが科学的根拠に基づいて認められ、特定の保健の目的が期待できることの表示が許可されている食品です。",
            "表示されている効果や安全性 については国が審査を行い、食品ごとに消費者庁長官が許可しています。",
          ]}
        />

        <FaqBlock
          q_svg={svgs.q5}
          q_title={"特定保健用食品と機能性表示食品との違いを教えてください。"}
          a_text={[
            "特定保健用食品は効果や安全性について国の審査を経て許可されたものです。",
            "機能性表示食品は国の審査はなく事業者の責任で機能性を表示するものです。",
          ]}
        />

        <div className={cx("note")}>
          <div className={cx("box")}>
            <p>
              <span>◇</span>1日当たりの摂取目安量：1本（350ml）
            </p>
            <p>
              <span>◇</span>
              摂取の方法：1日1回1本を目安にそのままお飲みください。
            </p>
            <p>
              <span>◇</span>
              摂取上の注意：本品は多量摂取により疾病が治癒したり、より健康が増進するものではありません。
            </p>
            <p>
              <span>●</span>
              本品は、疾病の診断、治療、予防を目的としたものではありません。
            </p>
            <p>
              <span>●</span>
              疾病に罹患している場合は医師に、医薬品を服用している場合は医師、薬剤師に相談してください。
            </p>
            <p>
              <span>●</span>
              本品は、疾病に罹患している者、未成年者、妊産婦（妊娠を計画している者を含む。）及び授乳婦を対象に開発された食品ではありません。
            </p>
            <p>
              <span>●</span>
              体調に異変を感じた際は、速やかに摂取を中止し、医師に相談してください。
            </p>
            <p>
              <span>●</span>
              本品は、事業者の責任において特定の保健の目的が期待できる旨を表示するものとして、消費者庁長官に届出されたものです。
              <br />
              ただし、特定保健用食品と異なり、消費者庁長官による個別審査を受けたものではありません。​
            </p>
          </div>
          <div className={cx("link")}>
            <span>届出番号G538</span>
            <a href="/">消費者庁届出情報の詳細はこちら</a>
          </div>
        </div>
      </section>

      <section className={cx("attention")}>
        <div className={cx("wrapper")}>
          <img src={svgs.attention} alt="" width="540" />
        </div>
      </section>
    </main>
  );
};

export default Home;
