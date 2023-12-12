<template>
    <div :class="'container mx-auto'">
    <Navbar />
    <router-view />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar/Navbar.vue';
</script>