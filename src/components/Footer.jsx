import { useContext } from "react";
import { LanguageContext } from "../utils/languageContext";
import Clock from "./Clock";

export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <footer className="fixed bottom-3 left-6 flex flex-row-reverse gap-2 text-xs md:left-auto md:right-6 md:flex-row md:text-sm">
      <button
        className="rounded-sm border border-slate-300 bg-slate-100 px-2 text-black sm:hover:font-bold sm:hover:invert"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
      >
        {language === "en" ? "esp" : "eng"}
      </button>
      <Clock />
    </footer>
  );
}
