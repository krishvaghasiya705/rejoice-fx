import Aidigitalsection from "@components/aiwebdevelopment/aidigital";
import Aidigitaldevelopment from "@components/aiwebdevelopment/aidigitaldevelopment";
import Aiinnovationsection from "@components/aiwebdevelopment/aiinnovations";
import Aiwebandmobile from "@components/aiwebdevelopment/aiwebandmobile";
import Smallerobanner from "@components/Smallherobanner";

export default function Aiwebdevelopment() {
  return (
    <>
    <Smallerobanner text="Mobile & Web Solution" heading="Comprehensive Mobile & Web Development Solutions" paragraph="At Rejoice FX, we specialize in developing high-quality mobile apps and web solutions tailored to your business needs." />
    <Aiinnovationsection />
    <Aidigitalsection />
    <Aiwebandmobile />
    <Aidigitaldevelopment />
    </>
  )
}
