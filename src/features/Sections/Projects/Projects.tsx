import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import ProjectCard from "./ProjectCard";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useLayoutEffect(() => {
    const panelsContainer: any = document.querySelector("#panels-container");
    const panels = gsap.utils.toArray("#panels-container .panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#projects",
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + panelsContainer.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col gap-10 w-screen overflow-hidden h-screen bg-darker py-32 px-6 md:px-10 xl:px-32"
    >
      <h2 className="relative lg:text-left w-full lg:h-32 text-white/90 text-4xl md:text-6xl 2xl:text-7xl font-['Poppins-Bold'] text-center z-10">
        Projects
      </h2>

      <div id="panels-container" className="w-max h-screen flex">
        <ProjectCard
          href="https://github.com/Lxdovic/FullTextSearchEngine"
          title="Rust Search Engine"
          description="A Simple full-text search engine written in rust. (WIP)"
          tags={
            <>
              <span className="bg-secondary/80 px-4 rounded text-white/70">
                ♥
              </span>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                Rust
              </span>
            </>
          }
        />
        <ProjectCard
          href="https://github.com/Lxdovic/Weakfish"
          title="Chess Artificial Intelligence"
          description="A Simple program that can plays chess! it makes use of the Minimax Algorithm with Alpha-Beta Pruning."
          tags={
            <>
              <span className="bg-secondary/80 px-4 rounded text-white/70">
                ♥
              </span>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                Javascript
              </span>
            </>
          }
        />
        <ProjectCard
          href="https://github.com/Lxdovic/IRC"
          title="IRC Application"
          description="An IRC (Internet Relay Chat) that allows user to create channels and chat with other users."
          tags={
            <>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                React
              </span>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                Express
              </span>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                MongoDb
              </span>
            </>
          }
        />
        <ProjectCard
          href="https://github.com/Lxdovic/Pathfinder"
          title="Pathfinder"
          description="A simple pathfinding visualizer that uses the A* algorithm."
          tags={
            <>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                Javascript
              </span>
              <span className="bg-primary/80 px-4 rounded text-white/70">
                Three.js
              </span>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
