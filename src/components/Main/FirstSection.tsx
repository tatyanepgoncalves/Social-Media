import Facebook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Youtube from "../../assets/images/icon-youtube.svg";
import Up from "../../assets/images/icon-up.svg";
import Down from "../../assets/images/icon-down.svg";
import F from "./FirstSection.module.scss";

export default function FirstSection() {
  return (
    <section className={F.FirstSection}>
      <div className={F.boxId}>
        <div className={F.top}>
          <img src={Facebook} alt="" />
          <span>@nathanf</span>
        </div>

        <div className={F.title}>
          <h2>1987</h2>
          <p>Followers</p>
        </div>

        <div className={F.bottom}>
          <img src={Up} alt="" />
          <span>12 Today</span>
        </div>
      </div>
     
      <div className={F.boxId}>
        <div className={F.top}>
          <img src={Twitter} alt="" />
          <span>@nathanf</span>
        </div>
        <div className={F.title}>
          <h2>1044</h2>
          <p>Followers</p>
        </div>

        <div className={F.bottom}>
          <img src={Up} alt="" />
          <span>99 Today</span>
        </div>
      </div>
     
      <div className={F.boxId}>
        <div className={F.top}>
          <img src={Instagram} alt="" />
          <span>@realnathanf</span>
        </div>

        <div className={F.title}>
          <h2>11k</h2>
          <p>Followers</p>
        </div>

        <div className={F.bottom}>
          <img src={Up} alt="" />
          <span>1099 Today</span>
        </div>
      </div>
     
      <div className={F.boxId}>
        <div className={F.top}>
          <img src={Youtube} alt="" />
          <span>Nathan F.</span>
        </div>

        <div className={F.title}>
          <h2>8239</h2>
          <p>Subscribers</p>
          
        </div>

        <div className={F.bottom}>
          <img src={Down} alt="" />
          <span>144 Today</span>
        </div>
      </div>
    </section>
  )
}
