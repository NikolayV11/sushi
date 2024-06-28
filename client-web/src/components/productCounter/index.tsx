export function ProductCounter() {
  return (
    <nav className="df aic jcsb  cart-product-body_nav">
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
  );
}
