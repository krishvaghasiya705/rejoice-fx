import Forexbuildsection from "@components/homepagecompo/forexbuildsection";
import Forexcalculatorsection from "@components/homepagecompo/Forexcalculatorsection";
import Homeherobanner from "@components/homepagecompo/herobanner";
import Homeservicessection from "@components/homepagecompo/Homeservicesection";
// import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div>
        <Homeherobanner />
        <Forexbuildsection />
        <Homeservicessection />
        <Forexcalculatorsection />
      </div>
    </>
  );
}
