<template>
 <div class="bannerpage">
  <div class="fade-slider">
   <transition-group name="fade" tag="div" class="slider-wrapper">
    <v-img
     v-if="items.length"
     :key="current"
     :src="items[current]"
     class="slider-img"
     cover
    ></v-img>
   </transition-group>
   <!-- Overlay Content -->
   <div class="banner-content">
    <h1 class="banner-title">Your Trusted Telemedicine Platform</h1>
    <p class="banner-subtitle">Connect with certified doctors anytime, anywhere</p>
    <v-btn color="rgb(11, 100, 11)" class="banner-btn" to="/doctor-list"> Find a Doctor </v-btn>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import banner1 from '@/assets/image/banner/banner1.jpg'
import banner2 from '@/assets/image/banner/banner2.jpg'
import banner3 from '@/assets/image/banner/banner3.jpg'

const current = ref(0)
const items = [banner1, banner2, banner3]

onMounted(() => {
 setInterval(() => {
  current.value = (current.value + 1) % items.length
 }, 7000)
})
</script>

<style scoped>
.bannerpage {
 /* margin-top: 30px;
 margin-bottom: 90px; */
}
.fade-slider {
 /* height: 550px; */
 height: calc(100vh - 70px);
 position: relative;
 overflow: hidden;
 border-radius: 5px;
}
.slider-wrapper {
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 1;
}
.slider-img {
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
}
.fade-enter-active,
.fade-leave-active {
 transition: opacity 2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
.banner-content {
 position: relative;
 z-index: 2;
 height: 100%;
 width: 100%;
 color: white;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 0 20px;
 background: rgba(0, 0, 0, 0.3);
}
.banner-title {
 font-size: 3rem;
 font-weight: bold;
}
.banner-subtitle {
 font-size: 1.5rem;
 margin-bottom: 1rem;
 max-width: 600px;
}
.banner-btn {
 font-weight: bold;
 text-transform: none;
}
</style>
