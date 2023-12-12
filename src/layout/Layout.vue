<template>
    <div :class="'container mx-auto'">
    <Navbar />
    <router-view />
    </div>
    <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>