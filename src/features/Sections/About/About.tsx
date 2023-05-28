import { goTo } from "../../../utils";
import GradientText from "../../GradientText/GradientText";
import Dots from "../../Patterns/Dots";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col gap-10 w-screen border-y border-white/25 min-h-screen bg-darker py-32 px-6 md:px-10 xl:px-32"
    >
      <Dots className="absolute opacity-20 top-0 left-0" />
      <h2 className="relative w-full lg:h-32 text-white/90 text-4xl md:text-6xl 2xl:text-7xl font-['Poppins-Bold'] text-center z-10">
        About me
      </h2>
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <AboutCard className="lg:w-2/3">
          I'm a 22-year-old computer-science student
          <GradientText>{" passionate "}</GradientText> about
          <GradientText>{" programming"}</GradientText>. I like spending time on
          fixing small details to make my work look as good as possible. Coding
          feels like a game to me, I'm just having fun
          <GradientText>{" learning "}</GradientText> new
          <GradientText>{" technologies "}</GradientText> and improving my
          skills.
        </AboutCard>
        <AboutCard className="lg:w-1/3">
          I'm currently working half-time as a fullstack developer at
          <GradientText>{" Holis "}</GradientText> and studying at
          <GradientText>{" Epitech "}</GradientText> for a master's degree.
        </AboutCard>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="flex lg:flex-row flex-col gap-10 lg:w-2/3">
          <AboutCard className="lg:w-1/2">
            I've taken part in
            <GradientText>
              {" International Robotics Competitions "}
            </GradientText>
            (First Lego League) with my local club.
            <a
              href="https://epa-paris-saclay.fr/actualites-et-decryptages/toutes-nos-publications/heureux-qui-comme-aux-ulis-auront-fait-un-long-voyage/"
              className="text-center border-t h-6 text-sm font-['Poppins-Thin'] text-white/50 border-white/10 absolute bottom-0 w-full left-0"
            >
              learn more about Ulis robotique
            </a>
          </AboutCard>
          <AboutCard className="lg:w-1/2">
            I also happend to be a former
            <GradientText>{" Graphic Design Student "}</GradientText>
          </AboutCard>
        </div>
        <AboutCard className="lg:w-1/3">
          Besides Work and Studies, I also spend a lot of time learning new
          skills while working on my
          <GradientText>{" Personal Projects "}</GradientText>
          <a
            onClick={(e) => (e.preventDefault(), goTo("#projects"))}
            href=""
            className="text-center border-t h-6 text-sm font-['Poppins-Thin'] text-white/50 border-white/10 absolute bottom-0 w-full left-0"
          >
            Explore my projects
          </a>
        </AboutCard>
      </div>
    </div>
  );
};

export default About;
