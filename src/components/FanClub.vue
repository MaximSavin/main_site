<template>
  <!-- prettier-ignore -->
  <div class="uk-width-1-1 uk-overflow-hidden uk-margin-medium-top">
    <div uk-slider="draggable: true; center: true; sets: false; finite: false;">
      <div class="uk-position-relative">
        <div class="uk-slider-container">
          <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-child-width-1-2@s uk-grid" uk-height-match=".uk-card-body">
            <li v-for="item in funcItems">
              <div>
                <a href="#" class="uk-card uk-card-default box-shadow-none"
                  :style="{ 'background-image': 'url(https://strapi.galaxyonline.io' + item.cover.url + ')' }">
                  <span :uk-tooltip="'title: ' + t('fanclub.type.' + item.type)"
                  class="fun-club-card-info fun-club-card-text"
                  :class="'fun-club-card-' + item.type"></span>
                  <!-- 
                    fun-club-card-text - рассказ,
                    fun-club-card-video - видео,
                    fun-club-card-audio - аудио,
                    fun-club-card-print - материалы для печати,
                    fun-club-card-pic - заставки/обои
                  -->
                  <h6>{{ item.title }}</h6>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <a class="uk-position-center-left uk-position-small uk-slidenav uk-visible@m" href="#" uk-slider-item="previous">
          <svg width="13.6" height="23.2" viewBox="0 0 17 29" fill="none" version="1.1" id="svg4" xmlns="http://www.w3.org/2000/svg" ><path d="M 0.72172781,15.5926 13.182118,28.0528 c 0.28819,0.2884 0.67291,0.4473 1.08312,0.4473 0.41021,0 0.79492,-0.1589 1.08312,-0.4473 l 0.91762,-0.9174 c 0.597104,-0.5978 0.597104,-1.5693 0,-2.1662 L 5.8026278,14.5059 16.277588,4.03093 c 0.288194,-0.28842 0.447316,-0.67291 0.447316,-1.08289 0,-0.41044 -0.159122,-0.79493 -0.447316,-1.08358 l -0.91762,-0.917164 c -0.28843,-0.288421 -0.67291,-0.447315 -1.08312,-0.447315 -0.41021,0 -0.79493,0.158894 -1.08312,0.447315 L 0.72172781,13.4189 c -0.2889,0.2893 -0.4476,0.6756 -0.4467,1.0863 -9e-4,0.4122 0.1578,0.7983 0.4467,1.0874 z" fill="white" id="path2" style="fill: #ffffff; fill-opacity: 1" /></svg>
        </a>
        <a class="uk-position-center-right uk-position-small uk-slidenav uk-visible@m" href="#" uk-slider-item="next">
          <svg width="13.6" height="23.2" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2782 15.5926L3.81781 28.0528C3.52962 28.3412 3.1449 28.5001 2.73469 28.5001C2.32448 28.5001 1.93977 28.3412 1.65157 28.0528L0.73395 27.1354C0.136846 26.5376 0.136846 25.5661 0.73395 24.9692L11.1973 14.5059L0.72234 4.03093C0.434146 3.74251 0.275024 3.35802 0.275024 2.94804C0.275024 2.5376 0.434146 2.15311 0.72234 1.86446L1.63996 0.947296C1.92839 0.658875 2.31287 0.499981 2.72308 0.499981C3.13329 0.499981 3.51801 0.658875 3.8062 0.947296L16.2782 13.4189C16.5671 13.7082 16.7258 14.0945 16.7249 14.5052C16.7258 14.9174 16.5671 15.3035 16.2782 15.5926Z" fill="white"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fan-club",
};
</script>

<script setup>
import { ref, watch, computed } from "vue";
import { useFetch } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const url = ref("https://strapi.galaxyonline.io/fan-clubs?_sort=id:ASC&_locale=" + locale.value);
const { data } = useFetch(url, { refetch: true }).json();
const funcItems = data;

watch([locale, url], () => {
  url.value = "https://strapi.galaxyonline.io/fan-clubs?_sort=id:ASC&_locale=" + locale.value;
});
</script>

<style></style>
