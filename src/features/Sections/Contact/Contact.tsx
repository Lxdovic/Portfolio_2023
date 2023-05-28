import Dots from "../../Patterns/Dots";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col gap-20 w-screen border-y border-white/25  bg-darker py-32 px-6 md:px-10 xl:px-32"
    >
      <Dots className="absolute opacity-20 top-0 left-0" />
      <h2 className="z-10 text-center text-4xl md:text-6xl 2xl:text-7xl font-['Poppins-Bold'] font-bold text-white/90 ">
        Contact
      </h2>

      <div className="z-10 justify-center flex gap-10">
        <a href="https://www.linkedin.com/in/debeverludovic/">
          <Icon icon="bi:linkedin" height={50} className="text-primary" />
        </a>
        <a href="https://github.com/Lxdovic">
          <Icon icon="cib:github" height={50} className="text-primary" />
        </a>
        <a href="mailto:ludovicdebever0@gmail.com">
          <Icon
            icon="simple-icons:gmail"
            height={50}
            className="text-primary"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
