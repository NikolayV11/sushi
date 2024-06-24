import { useState } from "react";

import { Link } from "react-router-dom";
import { Popup } from "../../components";
export function Home() {
  const [ascentModal, setAscentModal] = useState(false);

  function ascentPopup() {
    setAscentModal(!ascentModal);
  }

  return (
    <>
      <div className="content">
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
      </div>
    </>
  );
}
