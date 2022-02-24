<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import AuthModal from "@/components/AuthModal.vue";
import TelegramLogin from "@/components/TelegramLogin.vue";
import AccountModal from "@/components/AccountModal.vue";
import ruSvg from "@/assets/images/ru.svg";
import enSvg from "@/assets/images/en.svg";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });
const authModalShow = ref(false);
const raceModalShow = ref(false);

const toggleAuthModalShow = () => {
  authModalShow.value = !authModalShow.value;
};
const toggleRaceModalShow = () => {
  raceModalShow.value = !raceModalShow.value;
};

const toggleLang = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};

// console.log(new URL('../assets', import.meta.url).href)
// console.log(new URL('../assets', import.meta.url))

// const localeImgUrl = computed(() => new URL('../assets/images/', import.meta.url).href + locale.value + ".svg")
const localeImgUrl = computed(() => (locale.value == "ru" ? ruSvg : enSvg));
</script>

<template>
  <div class="uk-width-1-1"><TelegramLogin /></div>
</template>

<style>
#preloader {
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(14, 14, 14, 0.7);
  backdrop-filter: blur(100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
#preloader #svg44 {
  -webkit-animation: rotating 10s infinite linear;
  animation: rotating 10s infinite linear;
  margin-right: 20px;
}
</style>
