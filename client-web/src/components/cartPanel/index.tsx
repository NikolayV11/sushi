import { Link } from "react-router-dom";
import { PromoCode, BasketItemPanel } from "../";

import { useAppSelector } from "../../store/hooks";

export function CartPanel() {
  const { basket, price } = useAppSelector((select) => select.basket);
  return (
    <div className="df fdc rg20 cart-panel-block">
      <PromoCode />
      <div className="df fdc cart-panel-cart">
        <header className="cart-panel-header">
          <h3>Корзина</h3>
        </header>
        <div className="df fdc cart-panel-body">
          {basket.slice(0, 4).map((item) => {
            return <BasketItemPanel key={item.id} params={item} />;
          })}
          {basket.length >= 4 && <Link to="/basket">Перейди в корзину</Link>}
        </div>
        <div className="delimiter"></div>
        <div className=" df fdc cart-panel-footer">
          <div className="df jcsb aic cart-panel-footer_price">
            <div>Сумма заказа</div>
            <div>{price} руб</div>
          </div>
          <Link className="aic jcc" to={"/"}>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7698 4.03143H12.8305L11.7895 0.360103C11.7543 0.28446 11.7043 0.216726 11.6424 0.160964C11.5805 0.105203 11.508 0.062562 11.4293 0.0356009C11.3506 0.00863979 11.2673 -0.00208632 11.1843 0.00406594C11.1014 0.0102182 11.0205 0.0331221 10.9466 0.0714036L10.8752 0.107743C10.724 0.187202 10.6094 0.32225 10.5552 0.484623C10.501 0.646996 10.5115 0.824107 10.5845 0.978888L11.3298 4.03042H4.63699L5.40948 0.982926C5.48343 0.828856 5.49532 0.652096 5.44267 0.489449C5.39002 0.326801 5.27689 0.1908 5.12684 0.109762L5.05643 0.0734225C4.98282 0.0344756 4.90216 0.0108056 4.81924 0.00382467C4.73633 -0.00315627 4.65286 0.0066949 4.57382 0.0327904C4.49478 0.0588858 4.42179 0.100691 4.3592 0.155712C4.29661 0.210733 4.2457 0.277842 4.20952 0.353037L3.13026 4.03042H1.22923C0.826896 4.03042 0.5 4.33527 0.5 4.70876C0.5 4.70876 0.82589 5.94028 1.22923 5.94028H1.86894L2.32056 12.6803C2.32056 12.6803 2.37286 14.0016 4.44589 14.0016H11.5078C13.6654 14.0016 13.6352 12.653 13.6352 12.653L14.0003 5.94129H14.7708C15.1731 5.94129 15.5 4.70977 15.5 4.70977C15.499 4.33628 15.1721 4.03143 14.7698 4.03143ZM3.49135 5.99681H2.42315V4.92478H3.49135V5.99681ZM5.5342 11.7617C5.5342 12.115 5.28173 12.4007 4.97194 12.4007H4.9488C4.63599 12.4007 4.38453 12.115 4.38453 11.7617V7.39185C4.38453 7.03855 4.63599 6.75388 4.9488 6.75388H4.97194C5.28173 6.75388 5.5342 7.03855 5.5342 7.39185V11.7617ZM8.54969 11.5649C8.54969 11.902 8.31131 12.1756 8.0176 12.1756H7.99648C7.70177 12.1756 7.46439 11.902 7.46439 11.5649V7.42718C7.46439 7.09003 7.70177 6.81748 7.99648 6.81748H8.0176C8.31131 6.81748 8.54969 7.09104 8.54969 7.42718V11.5649ZM11.535 11.6577C11.535 11.9989 11.2886 12.2745 10.9858 12.2745H10.9637C10.6599 12.2745 10.4155 11.9989 10.4155 11.6577V7.46251C10.4155 7.12132 10.6599 6.84574 10.9637 6.84574H10.9858C11.2886 6.84574 11.535 7.12132 11.535 7.46251V11.6577ZM13.5497 6.0281H12.4493V4.92377H13.5497V6.0281Z"
                fill="#FEFEFE"
              />
            </svg>
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
}
