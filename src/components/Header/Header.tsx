import ThemeSwitcher from "../ThemeSwitcher";
import H from "./Header.module.scss";

export default function Header() {
  return (
    <header className={H.header}>
      <div className={H.container}>
        <div className={H.left}>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </div>

        <div  className={H.right}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
