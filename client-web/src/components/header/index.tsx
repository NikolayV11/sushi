import { Link } from "react-router-dom";
import logo from "../../../public/ico/logo.svg";
export function Header() {
  return (
    <header className="header">
      <div className="content">
        <Link to="/">
          <img src={logo} alt="логотип" width={225} height={80} />
        </Link>
        <nav></nav>
      </div>
    </header>
  );
}
