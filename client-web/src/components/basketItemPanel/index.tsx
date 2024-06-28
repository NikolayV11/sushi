import { ProductCounter } from "../";

export function BasketItemPanel() {
  return (
    <div className="df fdc cart-product-card">
      <header className=" df aic jcsb cart-product-header">
        <div className="df aic cart-product-header_title">
          <div>Сет "Только мне"</div>
          <div>(554гр)</div>
        </div>
        <button type="button">
          <img src="public/ico/Vector.svg" alt="закрыть" />
        </button>
      </header>
      <div className="df jcsb cart-product-body">
        <div className="df fdc cart-product-body_info">
          <ul>
            <li>Сяке ясай маки 8 шт</li>
            <li>Тояма маки 8 шт</li>
            <li>Авокадо маки 8 шт</li>
          </ul>
          <div>16.50 руб.</div>
        </div>
        <div className="df aie">
          <ProductCounter />
        </div>
      </div>
    </div>
  );
}
