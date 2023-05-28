const ProjectCard = (props: any) => {
  const { title, description, href, tags } = props;

  return (
    <a href={href} className="panel lg:w-[50rem] w-screen h-full px-10">
      <div className="overflow-hidden relative border hover:bg-darkest/60 transition flex flex-col gap-4 border-white/25 rounded-xl p-10 h-full">
        <div className="flex gap-4">{tags}</div>
        <h3 className="text-4xl font-['Poppins-Semibold'] text-white/80">
          {title}
        </h3>
        <p className="text-2xl text-white/70 font-['Poppins-Regular']">
          {description}
        </p>

        <p className="mt-auto text-white/50">28/05/2023</p>
      </div>
    </a>
  );
};

export default ProjectCard;
