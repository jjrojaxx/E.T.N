<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import 'flowbite';
</script>
<template>
  <div>
    <NuxtLayout>
      <Header />
       <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
