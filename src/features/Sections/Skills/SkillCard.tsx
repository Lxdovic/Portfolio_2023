type Props = {
  image: string;
};

const SkillCard = ({ image }: Props) => {
  return (
    <div className="skillcard flex flex-col justify-between items-center">
      <img
        src={image}
        className="bg-cover h-28 hover:drop-shadow-[0_0px_10px_#9800FF] transition drop-shadow-none"
      />
    </div>
  );
};

export default SkillCard;
