import { ProductCounter } from "../";
export function CardProduct() {
  return (
    <div className="df fdc aic rg20 card-product">
      <img src="public/img/product1.jpg" alt="" width={180} height={180} />
      <h3 className="card-product_title">Нигири с тунцом опаленным</h3>
      <div className="df aic jcsb w100 card-product_footer">
        <div>
          <div className="df aic jcsb card-product_footer-info">
            <div className="card-product_footer-info_price">2.90</div>
            <div className="card-product_footer-info_quantity"> руб. за 1 порцию (1шт)</div>
          </div>
          <div className="df aic jcsb card-product_footer-info">
            <div className="card-product_footer-info_price">2.90</div>
            <div className="card-product_footer-info_quantity"> руб. за 1 порцию (1шт)</div>
          </div>
        </div>

        <ProductCounter />
      </div>
    </div>
  );
}
