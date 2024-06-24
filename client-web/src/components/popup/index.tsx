export function Popup({ ascentPopup, status }: { ascentPopup: () => void; status: boolean }) {
  return (
    <>
      {status && (
        <div className="popup">
          <div className="popup-modal">
            <img
              className="popup-img"
              src="public/img/1.jpg"
              alt="фото суши"
              width={480}
              height={480}
            />
            <div className="popup-info">
              <header className="popup-header">
                <h2>Нигири с тунцом опаленным</h2>
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
                  <p>
                    Тунец опаленный, стружка тунца, майонез, соус тайский сладкий чили, васаби 0,5 г
                  </p>
                  <p>Вес одной порции 38 г</p>
                </div>
                <div className="popup_nutritional-value">
                  <p>Пищевая ценность на 100 г:</p>
                  <ul className="popup-list">
                    <li>
                      <div>Энерг. ценность</div>
                      <div>164.10 ккал</div>
                    </li>
                    <li>
                      <div>Белки</div>
                      <div>10.80 г</div>
                    </li>
                    <li>
                      <div>Жиры</div>
                      <div>2.50 г</div>
                    </li>
                    <li>
                      <div>Углеводы</div>
                      <div>24.20 г</div>
                    </li>
                  </ul>
                  <h3>2.90 руб за 1 порцию (1шт)</h3>
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
