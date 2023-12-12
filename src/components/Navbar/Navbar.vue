<template>
  <nav>
    <div :class="'flex justify-between p-5 w-full items-center border-b border-[#eeedeb]'">
      <img :src="Logo" alt="" :class="'w-1/6'" />
      <ul :class="'flex'">
        <li><router-link to="/" :class="' mr-6'">HOME</router-link></li>
        <li><router-link to="/about" :class="''">ABOUT</router-link></li>
      </ul>
      <div>
        <input type="text" placeholder="filter..." :class="'italic border border-[#eeedeb]  rounded-full py-2 px-3'">
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from "@assets/images/logo.png";
</script>
