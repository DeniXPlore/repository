import { Falaptop, FaTableAlt, FaMobileAlt } from "react-icons/fa";
import useWindowsize from "./hooks/useWindowSize";

const Header = ({ title }) => {
  const width = useWindowsize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTableAlt />
      ) : (
        <Falaptop />
      )}
    </header>
  );
};

export default Header;
