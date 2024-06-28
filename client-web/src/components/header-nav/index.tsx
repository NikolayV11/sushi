import { Link, useLocation } from "react-router-dom";
import { menuList, phoneList } from "../../type/";

export function HeaderNav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="df aic header-nav">
      <ul className="df aic  header-link-list">
        {menuList.map((item, index) => {
          return (
            <li
              className={`df aic header-link-item ${
                item.link == location.pathname && "url-active"
              }`}
              key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="df aic header-phone-block">
        <button type="button" className="header-phone-btn">
          <img
            className="header-phone-img"
            src="public/ico/phone.svg"
            alt="телефон"
            width={50}
            height={50}
          />
        </button>

        <ul className="df fdc jcsb header-phone-list">
          {phoneList.map((item, index) => {
            return (
              <li className="header-phone-item" key={index}>
                <a href={`tel:${item.link}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
