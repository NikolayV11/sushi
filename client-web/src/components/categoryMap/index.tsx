import { TypeCategory } from "../../type/";

export function CategoryMap(props: TypeCategory) {
  return (
    <button type="button" className="df aic fdc jcsb btnCategory">
      <img src={props.urlImg} alt={props.title} width={100} height={100} />
      <div>{props.title}</div>
    </button>
  );
}
