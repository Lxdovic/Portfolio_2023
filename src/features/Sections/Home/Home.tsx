// import Navbar from "../../Navbar/Navbar";
import Plus from "../../Patterns/Plus";
import TorusKnot from "../../TorusKnot/TorusKnot";

const Home = () => {
  return (
    <div
      className="relative bg-darker flex flex-col w-screen h-screen justify-center"
      id="home"
    >
      {/* <Navbar /> */}
      <div className="relative w-full h-[40rem] py-10 flex justify-center lg:justify-between px-10 xl:px-32 items-center border-y border-white/25">
        <Plus className="absolute left-0 top-0" />
        <div className="flex flex-col justify-between w-full lg:w-20rem 2xl:w-[50rem] h-[16rem] gap-4 z-10">
          <h1 className="lg:text-left text-center text-4xl md:text-6xl 2xl:text-7xl font-['Poppins-Bold'] text-white/90">
            👋 Hi I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" Ludovic Debever "}
            </span>
            Welcome to my Portfolio
          </h1>

          <div className="flex flex-col gap-4 text-white/80 lg:text-left text-center">
            <p className="text-xl">
              Working
              <a
                className="text-primary hover:text-primary/90"
                href="https://holis.earth"
                target="blank"
              >
                {" @Holis "}
              </a>
              <a
                className="text-primary hover:text-primary/90"
                href="https://stationf.co/"
                target="blank"
              >
                {" @StationF "}
              </a>
            </p>
            <p className="text-xl">
              Studying
              <a
                className="text-primary hover:text-primary/90"
                href="https://www.epitech.eu/en/"
                target="blank"
              >
                {" @Epitech"}
              </a>
            </p>
          </div>
        </div>

        <TorusKnot className="lg:flex hidden w-[25rem] h-[25rem] 2xl:w-[40rem] 2xl:h-[40rem]" />
      </div>
    </div>
  );
};

export default Home;
