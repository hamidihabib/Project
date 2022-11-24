import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "./header";

interface layout {
  children: React.ReactNode;
}

function Layout({ children }: layout) {
  const router = useRouter();
  const { route, asPath } = router;

  useEffect(() => {
    //COMMENT auto detect langue
    const userLang = localStorage.getItem("lang");
    if ((userLang !== null && userLang == "en") || userLang == "es") {
      router.replace(route, asPath, { locale: userLang });
    } else if (userLang !== null && userLang !== "en" && userLang !== "es") {
      localStorage.removeItem("lang");
    }

    //COMMENT auto detect theme
    const d = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = matchMedia("(prefers-color-scheme: dark;)")
      ? "dark"
      : "light";
    if (
      (storedTheme !== null && storedTheme == "light") ||
      storedTheme == "dark"
    ) {
      d.style.colorScheme = storedTheme;
      d.classList.add(storedTheme || systemTheme);
    } else if (
      storedTheme !== null &&
      storedTheme !== "light" &&
      storedTheme !== "dark"
    ) {
      localStorage.removeItem("theme");
    }
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
export default Layout;
