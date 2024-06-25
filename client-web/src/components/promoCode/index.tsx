import { useState } from "react";

export function PromoCode() {
  const [value, setValue] = useState<string>("");
  return (
    <div className="promo-code-block">
      <form action="">
        <label htmlFor="promoCode" className="visually-hidden">
          Промокод
        </label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name=""
          id="promoCode"
          placeholder="Введите промокод"
        />
        <button type="submit">Ввести</button>
      </form>
    </div>
  );
}
