import { ProductCounter } from "../";
import { DishBasket } from "../../type";

import { addDishBasket, deleteOfBasket, subtractionDish } from "../../store/Basket";
import { useAppDispatch } from "../../store/hooks";

export function BasketItemPanel({ params }: { params: DishBasket }) {
  const dispatch = useAppDispatch();
  return (
    <div className="df fdc cart-product-card">
      <header className=" df aic jcsb cart-product-header">
        <div className="df aic cart-product-header_title">
          <div>{params.name}</div>
          <div>({params.weight} г.)</div>
        </div>
        <button type="button" onClick={() => dispatch(deleteOfBasket(params.id))}>
          <img src="public/ico/Vector.svg" alt="удаление" />
        </button>
      </header>
      <div className="df jcsb cart-product-body">
        <div className="df fdc cart-product-body_info">
          {params.description}
          <div>{params.priceBasket} руб.</div>
        </div>
        <div className="df aie">
          <ProductCounter
            addBasketDish={() => dispatch(addDishBasket(params))}
            count={params.count}
            subtractionBasketDish={() => dispatch(subtractionDish(params.id))}
          />
        </div>
      </div>
    </div>
  );
}
