<template>
    <main>
       <h1 class="text-center w-full">
        LMS untuk edukasi lebih menyenangkan :
         <nuxt-link class="text-green-600 font-semibold text-center " to="/courses/1">
        DEMO Course
       </nuxt-link>
       </h1>
      
    </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "welcome",
});
</script>

<style>
.main-content{
    padding-top:70px
}
</style>
