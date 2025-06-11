import { atom } from "recoil";

export const chatbotItem = atom<boolean>({
  key: "chatbotItem",
  default: false,
});