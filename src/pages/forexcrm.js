import Forexcrmherobanner from "@components/forexcrmpagecompo/florexcrmherobanner";
import Forexcrmbuild from "@components/forexcrmpagecompo/forexcrmbuildsection";
import Forexcrmchoose from "@components/forexcrmpagecompo/forexcrmchoose";
import Forexcrmdream from "@components/forexcrmpagecompo/forexcrmdreamsection";
import Forexcrmsavings from "@components/forexcrmpagecompo/forexcrmsavings";
import Forexcrmunmatch from "@components/forexcrmpagecompo/forexcrmunmatchsection";
import Forexcrmdevelopment from "@components/forexcrmpagecompo/forexdevelopsection";
import Forexfaqsection from "@components/forexcrmpagecompo/Forexfaqsection";
import Forexpluggedsection from "@components/forexcrmpagecompo/forexpluggedsection";
import Forexreliable from "@components/forexcrmpagecompo/forexreliablesection";
import Forexsecure from "@components/forexcrmpagecompo/forexsecuresection";
import Forexcrmwork from "@components/forexcrmpagecompo/forexworksection";

export default function Forexcrm() {
    return (
        <>
            <Forexcrmherobanner />
            <Forexcrmwork />
            <Forexreliable />
            <Forexsecure />
            <Forexcrmbuild />
            <Forexcrmdevelopment />
            <Forexcrmunmatch />
            <Forexcrmdream />
            <Forexcrmchoose />
            <Forexcrmsavings />
            <Forexpluggedsection />
            <Forexfaqsection />
        </>
    )
}