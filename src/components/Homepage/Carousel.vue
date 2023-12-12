<template>
  <div class="swiper" :class="'h-96 w-3/4'">
    <div class="swiper-wrapper" >
      <div class="swiper-slide"><img :src="food2" alt="" :class="'bg-contain'"/></div>
      <div class="swiper-slide"><img :src="food1" alt="" /></div>
      <div class="swiper-slide"><img :src="food3" alt="" /></div>
   
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script setup>
import food1 from "@assets/images/food1.avif";
import food2 from "@assets/images/food2.avif";
import food3 from "@assets/images/food3.avif";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
</script>
