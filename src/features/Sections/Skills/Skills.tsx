import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useLayoutEffect(() => {
    const skills = gsap.utils.toArray(".skillcard");

    console.log(skills);

    gsap.fromTo(
      document.querySelectorAll(".skillcard"),
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#skills",
          scrub: true,
          start: "top 50%",
          end: "top",
          immediateRender: false,
          markers: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div
      id="skills"
      className="relative flex flex-col gap-10 w-screen  bg-darker py-32 px-6 md:px-10 xl:px-32"
    >
      <h2 className="relative w-full lg:h-32 text-white/90 text-4xl md:text-6xl 2xl:text-7xl font-['Poppins-Bold'] text-right z-10">
        My skills
      </h2>

      <div className="w-full grid grid-cols-2 gap-6">
        <div className="grid grid-cols-3 items-center gap-4 border border-white/25 rounded-xl p-8">
          <SkillCard image="nest.png" />
          <SkillCard image="react.png" />
          <SkillCard image="tailwindcss.png" />
          <SkillCard image="express.png" />
          <SkillCard image="electron.png" />
          <SkillCard image="tauri.png" />
        </div>

        <div className="grid grid-cols-3 items-center gap-4 border border-white/25 rounded-xl p-8">
          <SkillCard image="mongodb.png" />
          <SkillCard image="prisma.png" />
          <SkillCard image="postgres.png" />
        </div>

        <div className="grid grid-cols-3 items-center gap-4 border border-white/25 rounded-xl p-8">
          <SkillCard image="javascript.png" />
          <SkillCard image="typescript.png" />
          <SkillCard image="java.png" />
          <SkillCard image="rust.png" />
          <SkillCard image="php.png" />
          <SkillCard image="cpp.png" />
        </div>

        <div className="grid grid-cols-3 items-center gap-4 border border-white/25 rounded-xl p-8">
          <SkillCard image="three.png" />
          <SkillCard image="poimandres.png" />
          <SkillCard image="socketio.png" />
          <SkillCard image="fuse.png" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
