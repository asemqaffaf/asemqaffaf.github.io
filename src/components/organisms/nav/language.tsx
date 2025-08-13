import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import type { LanguageType } from "@/util/nav-items";
import { languagesList } from "@/util/nav-items";

export default function LanguageList({
  setIsLanguageMenuOpen,
  setIsMobileMenuOpen,
}: {
  setIsLanguageMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { i18n } = useTranslation();

  const changeLanguage = (language: LanguageType) => {
    i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <ul
      className="flex flex-col items-center justify-center px-6 py-2 font-medium"
      role="none"
    >
      {languagesList.map((lang) => (
        <li key={lang.value}>
          <button
            type="button"
            onClick={() => changeLanguage(lang.value)}
            className="block w-24 px-4 py-2 text-start text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center whitespace-nowrap">
              {lang.name}
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
