import { useState } from "react";
export function useCountryPreference() {
  const [country, setCountry] = useState(() => {
    return localStorage.getItem("user_country_code") || "";
  });
  const saveCountry = (code) => {
    setCountry(code);
    localStorage.setItem("user_country_code", code);
  };
  return [country, saveCountry];
}
