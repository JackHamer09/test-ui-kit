import "./../src/assets/tailwind.css";
import { createI18n } from "vue-i18n";
import enUS from "../src/locales/en.json";
import { app } from '@storybook/vue3'

app.component('RouterLink', {
  template: `<a v-bind="$props" href="#"><slot /></a>`
});

const i18n = createI18n({
  locale: "en",
  allowComposition: true,
  messages: {
    en: enUS,
  },
});
app.use(i18n)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
