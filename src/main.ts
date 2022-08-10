import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import ViewerPlugin from "./ViewerPlugin";
import enUS from "./locales/en.json";
import testId from "./plugins/testId";

import "@/assets/tailwind.css";

export type MessageSchema = typeof enUS;

const app = createApp(App);
const i18n = createI18n<[MessageSchema], "en">({
  legacy: false,
  fallbackLocale: "en",
  locale: "en",
  allowComposition: true,
  messages: {
    en: enUS,
  },
});

app.use(i18n);
app.use(testId);
app.use(ViewerPlugin);

app.mount("#app");
