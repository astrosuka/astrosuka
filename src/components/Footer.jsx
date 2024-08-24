import { useContext } from "react";
import { LanguageContext } from "../utils/languageContext";
import Clock from "./Clock";

export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <footer className="fixed bottom-6 left-6 flex gap-2 text-xs md:text-sm">
      <button
        className="rounded-md border border-[#c1c5cb] p-1"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
      >
        {language === "en" ? "esp" : "eng"}
      </button>
    </footer>
  );
}
