import { atom } from "jotai";

const getStoredValue = (key: string, defaultValue: boolean) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) === "true";
  }
  return defaultValue;
};

export const FullHeaderChaptersAccordionAtom = atom(
  getStoredValue("FullHeaderChaptersAccordionAtom", true)
);

export const SmallHeaderChaptersAccordionAtom = atom(
  getStoredValue("SmallHeaderChaptersAccordionAtom", true)
);

export const SmallHeaderAtom = atom(getStoredValue("SmallHeaderAtom", false));

export const DarkMode = atom(getStoredValue("DarkMode", false));
