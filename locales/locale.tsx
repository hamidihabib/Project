import { useState } from "react";

export default function Locale() {
  const [Lang, setLang] = useState("");
  const sl = localStorage.getItem("lang") == "en" ? "en" : "es";
  if (typeof window !== "undefined") {
    setLang(sl);
  }
  return Lang;
}
