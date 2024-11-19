import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import M from "./Main.module.scss";

export default function Main() {
  return (
    <main className={M.main}>
      <div className={M.container}>
        <FirstSection />
        <SecondSection />
      </div>
    </main>
  )
}
