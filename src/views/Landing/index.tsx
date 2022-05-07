import Background from "./components/Background";
import Header from "./components/Header";
import FifthSection from "./components/Sections/FifthSection";
import FirstSection from "./components/Sections/FirstSection";
import FourthSection from "./components/Sections/FourthSection";
import SecondSection from "./components/Sections/SecondSection";
import SixthSection from "./components/Sections/SixthSection";
import ThirdSection from "./components/Sections/ThirdSection";
import LandingLayout from "./LandingLayout";

function Landing() {
    return (
        <LandingLayout>
            <Header />
            <Background />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
        </LandingLayout>
    );
}

export default Landing;
