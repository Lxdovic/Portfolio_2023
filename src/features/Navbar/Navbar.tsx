import { useParams } from "react-router-dom";
import Link from "./Link";

const sections = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const Navbar = () => {
  const { sectionParam } = useParams();

  return (
    <ul className="hidden sm:flex fixed top-0 w-full z-20 bg-darker border-b border-white/25 h-20 text-xl text-white/75  justify-center items-center gap-12">
      {sections.map((section: any, index: number) => (
        <Link
          key={index}
          section={sectionParam}
          to={section.id}
          title={section.title}
        />
      ))}
    </ul>
  );
};

export default Navbar;
