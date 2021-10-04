import { Link, withRouter } from "react-router-dom";

// jika mau import svg di react
// import { ReactComponent as Logo } from "../assets/images/logo.svg";
import propsTyps from "prop-types";
import { selectUser } from "../redux/features/users";
import { useAppSelector } from "../redux/hooks";

interface HProps {
    onLight: boolean;
    location:any
}
const  Header: React.FC<any> = ({ onLight, location }) => {



  const linkColor: string = onLight ? "text-gray-900" : "text-white";

  const linkCTA: string =
    location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;

  const textCTA: string = location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        {/* <Logo className={onLight ? "on-light" : "on-dark"}></Logo> */}
      </div>

      <ul className="flex">
        <li>
          <Link
            to="/"
            className={[
              linkColor,
              "text-white font-medium hover:text-teal-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={[
              linkColor,
              "text-white font-medium hover:text-teal-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={[
              linkColor,
              "text-white font-medium hover:text-teal-500 text-lg px-6 py-3",
            ].join(" ")}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            // target="_blank"
            // rel="noopener noreferrer"
            to={linkCTA}
            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white font-medium hover:text-teal-500 text-lg px-6 py-3 ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );
}


export default withRouter(Header);
