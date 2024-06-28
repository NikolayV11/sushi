import { useState } from "react";
import { CategoryMap } from "../";
import { categoryList } from "../../type/listCategory";

export function Categories() {
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  return (
    <div className="df fdc rg20 categories">
      <h2 className="visually-hidden">Категории товара</h2>
      <header className="df aic jcsb categories-header">
        <h3>Наши категории</h3>
        <button className="df aic g10" onClick={() => setOpenCategory(!openCategory)} type="button">
          Посмотреть все
          <img
            className={`${openCategory && "reversal"}`}
            src="public/ico/collapse.svg"
            alt="collapse"
            width={18}
            height={10}
          />
        </button>
      </header>
      <div className={`df g20 categories-body ${openCategory && "openCategory"}`}>
        {categoryList.map((item, index) => {
          return <CategoryMap key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
