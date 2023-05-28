import { goTo } from "../../utils";

type Props = {
  section?: string;
  to: string;
  title: string;
};

const Link = (props: Props) => {
  const { section, to, title } = props;

  return (
    <li
      onClick={() => goTo(`#${to}`)}
      className={`cursor-pointer text-${
        section === (undefined || to) && "primary"
      }`}
    >
      <button>{title}</button>
    </li>
  );
};

export default Link;
