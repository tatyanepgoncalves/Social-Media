import Facebook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Youtube from "../../assets/images/icon-youtube.svg";
import Up from "../../assets/images/icon-up.svg"
import Down from "../../assets/images/icon-down.svg";
import S from "./SecondSection.module.scss";

export default function SecondSection() {
  return (
    <section className={S.SecondSection}>
      <h2>Overview - Today</h2>

      <div className={S.pageBox}>
        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Page Views</p>
            <img src={Facebook} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>87</h2>
            <div className={S.data}>
              <img src={Up} alt="" />
              <span>3%</span>
            </div>
          </div>
        </div>
        
        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Likes</p>
            <img src={Facebook} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>52</h2>
            <div className={S.data}>
              <img src={Down} alt="" />
              <span>2%</span>
            </div>
          </div>
        </div>
        
        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Likes</p>
            <img src={Instagram} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>5462</h2>
            <div className={S.data}>
              <img src={Up} alt="" />
              <span>2257%</span>
            </div>
          </div>
        </div>
        
        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Profile Views</p>
            <img src={Instagram} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>52k</h2>
            <div className={S.data}>
              <img src={Up} alt="" />
              <span>1375%</span>
            </div>
          </div>
        </div>
        
        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Retweets</p>
            <img src={Twitter} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>117</h2>
            <div className={S.data}>
              <img src={Up} alt="" />
              <span>303%</span>
            </div>
          </div>
        </div>

        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Likes</p>
            <img src={Twitter} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>507</h2>
            <div className={S.data}>
              <img src={Up} alt="" />
              <span>553%</span>
            </div>
          </div>
        </div>

        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Likes</p>
            <img src={Youtube} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>107</h2>
            <div className={S.data}>
              <img src={Down} alt="" />
              <span>19%</span>
            </div>
          </div>
        </div>

        <div className={S.pageItem}>
          <div className={S.top}>
            <p>Total Views</p>
            <img src={Youtube} alt="" />
          </div>

          <div className={S.bottom}>
            <h2>1407</h2>
            <div className={S.data}>
              <img src={Down} alt="" />
              <span>12%</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
