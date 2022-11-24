import { useRouter } from "next/router";
import React from "react";
import es from "../locales/es/header.json";
import en from "../locales/en/header.json";

export default function Header() {
  const router = useRouter();
  const t = router.locale == "en" ? en : es;

  function handleLang(v: string): void {
    if(v == "en" || v =="es"){
      router.replace(router.route, router.asPath, { locale: v });
      localStorage.setItem("lang", v);
    }
  }
  function handleTheme(v: string): void {
    localStorage.setItem("theme", v);
    document.documentElement.style.colorScheme = v
    document.documentElement.classList.add(v)
  }

  return (
    <div>
      <div>
        <button onClick={() => handleLang("es")}>es</button>
        <button onClick={() => handleLang("en")}>en</button>
        <button onClick={() => handleLang("clear")}>clear</button>
      </div>
      <div>
        <button onClick={() => handleTheme("dark")}>dark</button>
        <button onClick={() => handleTheme("light")}>light</button>
      </div>
    </div>
  );
}
