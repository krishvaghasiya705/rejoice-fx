import Mauritiusadvantagesection from "@components/mauritiuslicensecompo/mauritiusadvantagesection";
import Mauritiusform from "@components/mauritiuslicensecompo/mauritiusform";
import Mauritiusherobanner from "@components/mauritiuslicensecompo/mauritiusherobanner";
import Mauritiusmarqueeslider from "@components/mauritiuslicensecompo/mauritiusmarqueeslider";
import Mauritiusminimumsection from "@components/mauritiuslicensecompo/mauritiusminimumsection";
import Mauritiusproccesssection from "@components/mauritiuslicensecompo/mauritiusproccesssection";
import Mauritiusstartsection from "@components/mauritiuslicensecompo/mauritiusstartsection";
// import mauritiusstartsectionimage from "assets/mauritiusimages/image/mauritiusstartimage.png";
import mauritiusstartsectionimage2 from "assets/mauritiusimages/image/mauritiusstartimage2.png";

export default function Vincentlicense() {
  return (
    <>
      <Mauritiusherobanner
        text="Sy. Vincent Forex License"
        title="St. Vincent Company Formation & Forex License"
      />
      <Mauritiusstartsection
        text="St. Vincent Company Formation"
        imageSrc={mauritiusstartsectionimage2}
        contentitle="Start your Forex Brokerage Business in St Vincent"
        contentp="St Vincent and the Grenadines offers an advanced level of confidentiality and has one of the best privacy laws. You get lowest minimum capital requirements, no need to get a physical office, good payment service providers, and fast application process for St. Vincent forex license. The minimum paid-up capital requirement is lowest in the world. St. Vincent is calling you, get a St Vincent and the Grenadines Forex License! With PheasanTech, you get comprehensive solutions for St. Vincent FSA and St. Vincent forex company formation process."
      />
      <Mauritiusproccesssection
        title={<>To Get St. Vincent Forex License Lets obtain your <br/> St. Vincent Forex Broker License</>}
        cardcontent1="Register an International Business Company in St. Vincent"
        cardcontent2="Submit an application for St. Vincent Forex Broker License"
        cardcontent3="Fulfilling the capital requirements"
        cardcontent4="Maintain a registered office address within St. Vincent "
        cardcontentspan5="Time Frame"
        cardcontentp5="Fastest in the world"
      />
      <Mauritiusminimumsection
        title="Lowest in the world"
        note=" All the companies are exempt from local tax for the first 25 years from the date of registration. There are no corporate or withholding taxes, and even no need for minimum paid-up capital requirements. No annual returns need to be filed and no list of shareholders to be submitted."
      />
      <Mauritiusadvantagesection />
      <Mauritiusmarqueeslider />
      <Mauritiusform />
    </>
  );
}
