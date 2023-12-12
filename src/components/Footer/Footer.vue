<template>
  <footer>
    <div :class="'w-screen flex justify-center p-10 border-b border-[#eeedeb]'">
    <div :class="'flex flex-col justify-center text-center items-center gap-y-10 w-1/3 p-10'">
      <img :src="logo" alt="" :class="'w-1/3'" />
      <p>Theme especially made for cooking experts, novices & all who enjoy sharing their recipes.</p>
    </div>
 
</div>
<p :class="'text-center mt-5'">© 2023 Kübra Tanrıkulu, All Rights Reserved</p>
  </footer>
</template>
<script setup>
import logo from "@assets/images/logo.png";
</script>

<style>
footer {
  background-image: url("../../assets/images/footer-bg.png");
}
</style>
