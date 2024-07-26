import { useEffect, useState } from "react";
import { ProductCounter } from "../";
import { BASE_URL } from "../../confects";
import { Dish } from "../../type";
import { Popup } from "../";

import { addDishBasket, subtractionDish } from "../../store/Basket";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export function CardProduct(params: Dish) {
  const [statusPopup, setStatusPopup] = useState(false);

  const [indexDish, setIndexDish] = useState(0);

  const basket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const count = basket.find((item) => item.id === params.id);
    if (count) {
      setIndexDish(count.count);
    }
  }, [basket]);

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
        <ProductCounter
          addBasketDish={() => dispatch(addDishBasket(params))}
          count={indexDish}
          subtractionBasketDish={() => dispatch(subtractionDish(params.id))}
        />
      </div>
    </div>
  );
}
