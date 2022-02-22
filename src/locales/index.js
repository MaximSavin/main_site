import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    message: {
      hello: "Привет по русский.",
      know_more: "Узнать больше",
    },
    fanclub: {
      type: {
        text: "Рассказ",
        video: "Видео",
        audio: "Аудио",
        print: "Материалы для печати",
        pic: "Заставки/Обои",
        null: "Другое"
      }
    },
  },
  en: {
    message: {
      hello: "Hello English.",
      know_more: "Know more",
    },
    fanclub: {
      type: {
        text: "Story",
        video: "Video",
        audio: "Audio",
        print: "Poster",
        pic: "Wallpaper",
        null: "Other"
      }
    },
  },
};

export default createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  globalInjection: true,
  messages,
});