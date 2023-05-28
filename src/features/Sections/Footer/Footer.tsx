const Footer = () => {
  return (
    <div className="bg-darkest/75 w-screen h-96">
      <div className="flex flex-col h-full gap-10 p-20">
        <h1 className="text-4xl text-center text-white/80 font-['Poppins-Bold']">
          Ludovic Debever
          <p className="text-white/70 text-sm font-['Poppins-Regular']">
            © 2023 Ludovic Debever
          </p>
        </h1>

        <ul className="flex flex-col underline gap-4 text-white/80">
          <a href="#home">Home page</a>
          <a href="#about">About me</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact me</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
