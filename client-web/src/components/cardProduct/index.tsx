import { useState } from "react";
import { ProductCounter } from "../";
import { BASE_URL } from "../../confects";
import { Dish } from "../../type";
import { Popup } from "../";
export function CardProduct(params: Dish) {
  const [statusPopup, setStatusPopup] = useState(false);
  function openPopup() {
    setStatusPopup(!statusPopup);
  }
  return (
    <div className="df fdc aic rg20 card-product">
      <Popup ascentPopup={openPopup} status={statusPopup} params={params} />
      <img
        onClick={() => {
          openPopup();
        }}
        src={`${BASE_URL}/public/img/${params.img_url}`}
        alt={`${params.name}`}
        width={180}
        height={180}
      />
      <h3
        onClick={() => {
          openPopup();
        }}
        className="card-product_title">
        {params.name}
      </h3>
      <div className="df aic jcsb w100 card-product_footer">
        <div>
          {params.price.map((item) => {
            return (
              <div key={item.id} className="df aic jcsb card-product_footer-info">
                <div className="card-product_footer-info_price">{item.price}</div>
                <div className="card-product_footer-info_quantity">
                  руб. за 1 порцию ({item.portion}шт)
                </div>
              </div>
            );
          })}
        </div>
        <ProductCounter />
      </div>
    </div>
  );
}
