import { useState } from "react";

import { Link } from "react-router-dom";
import { AdvertisingBanner, Popup, Categories, CardProduct } from "../../components";
export function Home() {
  const [ascentModal, setAscentModal] = useState(false);

  function ascentPopup() {
    setAscentModal(!ascentModal);
  }

  return (
    <div className="container-page">
      <h1>Home pages</h1>
      <Link to="/order">Order</Link>
      <Popup status={ascentModal} ascentPopup={ascentPopup} />
      <button
        type="button"
        onClick={() => {
          ascentPopup();
        }}>
        popup
      </button>
      <div className="df fdc rg20 home-block">
        <header className="df fdc rg46 stock">
          <AdvertisingBanner />
          <Categories />
        </header>
        <div className="df fdc rg20 block-product">
          <h2>Раздел подкаталога</h2>
          <ul className="df g10 fww aic jcc block-product-list">
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
            <li className="block-product-item">
              <CardProduct />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
