import Background from "./components/Background";
import Header from "./components/Header";
import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";
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
        </LandingLayout>
    );
}

export default Landing;
