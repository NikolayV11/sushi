import { BASE_URL } from "../../confects";
import { Dish } from "../../type";

export function Popup({
  ascentPopup,
  status,
  params,
}: {
  ascentPopup: () => void;
  status: boolean;
  params: Dish;
}) {
  return (
    <>
      {status && (
        <div className="popup">
          <div className="popup-modal">
            <img
              className="popup-img"
              src={`${BASE_URL}/public/img/${params.img_url}`}
              alt={`${params.name}`}
              width={480}
              height={480}
            />
            <div className="popup-info">
              <header className="popup-header">
                <h2>{params.name}</h2>
                <button
                  onClick={() => {
                    ascentPopup();
                  }}
                  type="button">
                  <img src="public/ico/Vector.svg" alt="закрыть" />
                </button>
              </header>
              <main className="popup-main">
                <div className="popup-main-info">
                  <p>{params.description}</p>
                  <p>Вес одной порции {params.energy_value} г</p>
                </div>
                <div className="popup_nutritional-value">
                  <p>Пищевая ценность на 100 г:</p>
                  <ul className="popup-list">
                    <li>
                      <div>Энерг. ценность</div>
                      <div>{params.energy_value} ккал</div>
                    </li>
                    <li>
                      <div>Белки</div>
                      <div>{params.squirrels} г</div>
                    </li>
                    <li>
                      <div>Жиры</div>
                      <div>{params.fats} г</div>
                    </li>
                    <li>
                      <div>Углеводы</div>
                      <div>{params.carbohydrates} г</div>
                    </li>
                  </ul>
                  {params.price.map((item) => {
                    return (
                      <h3>
                        {item.price} руб за 1 порцию ({item.portion}шт)
                      </h3>
                    );
                  })}
                </div>
              </main>
              <footer className="popup-footer">
                <nav>
                  <button type="button" className="popup-footer-btn btnMin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="3"
                      viewBox="0 0 10 4"
                      fill="none">
                      <path d="M0.0542189 3.864V0.12H9.95422V3.864H0.0542189Z" />
                    </svg>
                  </button>
                  <p>2</p>
                  <button type="button" className="popup-footer-btn btnPlus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed">
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </button>
                </nav>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
