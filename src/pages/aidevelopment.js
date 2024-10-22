import Smallerobanner from "@components/Smallherobanner";
import Aiservices from "@components/aidevelopmentcompo/aiservices";
import Aisolution from "@components/aidevelopmentcompo/aisolution";
import Aiboost from "@components/aidevelopmentcompo/aiboost";
import Aiwork from "@components/aidevelopmentcompo/aiwork";
import Aidevelopmentsection from "@components/aidevelopmentcompo/aidevelopment";

export default function Aidevelopment() {
  return (
    <>
      <Smallerobanner
        text="AI Development"
        heading="AI/ML Development Services: Empowering Your Business"
        paragraph="Drive innovation and efficiency in your business with expert AI & ML services by Rejoice FX.s"
      />
      <Aiservices />
      <Aisolution />
      <Aiboost />
      <Aiwork />
      <Aidevelopmentsection />
    </>
  );
}
