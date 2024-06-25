import { CategoryMap } from "../";
import { categoryList } from "../categoryMap/listCategory";

export function Categories() {
  return (
    <div className="df fdc categories">
      <h2 className="visually-hidden">Категории товара</h2>
      <header className="df aic jcsb categories-header">
        <h3>Наши категории</h3> <button type="button">Посмотреть все</button>
      </header>
      <div className="df categories-body">
        {categoryList.map((item, index) => {
          return <CategoryMap key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
