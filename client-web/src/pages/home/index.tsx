import { useEffect } from "react";

import { AdvertisingBanner, Categories, CardProduct } from "../../components";

import { fetchDish } from "../../store/ProductSlice";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
export function Home() {
  const { category, limit, search } = useAppSelector((state) => state.dish);
  const dishArray = useAppSelector((state) => state.dish.item.dish);
  const infoPages = useAppSelector((state) => state.dish.item.pages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDish({ category, limit, search }));
  }, [category, limit, search, infoPages.page, dispatch]);
  return (
    <div className="container-page">
      <h1>Home pages</h1>
      <div className="df fdc rg20 home-block">
        <header className="df fdc rg46 stock">
          <AdvertisingBanner />
          <Categories />
        </header>
        <div className="df fdc rg20 block-product">
          <h2>Раздел подкаталога</h2>
          <ul className="df g10 fww aic jcc block-product-list">
            {dishArray.length > 0 ? (
              dishArray.map((item) => {
                return (
                  <li key={item.id} className="block-product-item">
                    <CardProduct {...item} />
                  </li>
                );
              })
            ) : (
              <h3>Товар закончился</h3>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
