import Mauritiusherobanner from "@components/mauritiuslicensecompo/mauritiusherobanner";
import Mauritiusminimumsection from "@components/mauritiuslicensecompo/mauritiusminimumsection";
import Mauritiusproccesssection from "@components/mauritiuslicensecompo/mauritiusproccesssection";
import Mauritiusstartsection from "@components/mauritiuslicensecompo/mauritiusstartsection";
import mauritiusstartsectionimage from "assets/mauritiusimages/image/mauritiusstartimage.png";

export default function Mauritiuslicense() {
  return (
    <>
      <Mauritiusherobanner
        text="Mauritius Forex License"
        title="Company Formation & Mauritius Forex License"
      />
      <Mauritiusstartsection
        text="Mauritius Company Formation"
        imageSrc={mauritiusstartsectionimage}
        contentitle="Start your forex broking business in Mauritius"
        contentp="Mauritius offers amazing business experience with affordable capital requirements, fine banking services, payment service provider support, and easy application process for Mauritius forex license. The minimum paid-up capital requirement is MUR 700,000. Mauritius is the best destination for you, get a Mauritius Forex License! With PheasanTech, you get total support for Mauritius FSC and Mauritius forex company formation process. Contact us if you want to know more about company formation."
      />
      <Mauritiusproccesssection
        title="Forex in Mauritius Easy process to obtain Forex Broker License"
        cardcontent1="Register a Global Business Company in Mauritius"
        cardcontent2="Apply for Mauritius Forex Broker License"
        cardcontent3="Meet the GBC – I requirements set by FSC"
        cardcontent4="Start Forex Broking Business in the world"
        cardcontentspan5="Time Frame"
        cardcontentp5="3 – 4 Weeks"
      />
      <Mauritiusminimumsection />
    </>
  );
}
