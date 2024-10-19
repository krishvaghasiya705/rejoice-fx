import Mauritiusherobanner from "@components/mauritiuslicensecompo/mauritiusherobanner";
import Mauritiusstartsection from "@components/mauritiuslicensecompo/mauritiusstartsection";
import mauritiusstartsectionimage from "assets/mauritiusimages/image/mauritiusstartimage.png";

export default function Mauritiuslicense() {
  return (
    <>
      <Mauritiusherobanner />
      <Mauritiusstartsection imageSrc={mauritiusstartsectionimage} />
    </>
  )
}
