import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TypeCategory } from "../../type/";
import { categoryDish } from "../../store/ProductSlice";

export function CategoryMap(props: TypeCategory) {
  const category = useAppSelector((state) => state.dish.category);
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(categoryDish(props.parameter));
      }}
      type="button"
      className={`df aic fdc jcsb btnCategory ${category === props.parameter && "activeCategory"}`}>
      <img src={props.urlImg} alt={props.title} width={100} height={100} />
      <div>{props.title}</div>
    </button>
  );
}
