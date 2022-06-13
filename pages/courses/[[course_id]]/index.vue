<template>
    <main>
        <img class="w-full" src="@/assets/cover.jpg" alt="cover">
    </main>
      <nuxt-link to="/courses/1/page/1" class="w-full text-center rounded-lg mt-10 bg-green-600 p-8 text-2xl text-white font-bold">
            Start Course
    </nuxt-link>
</template>
<script lang="ts" setup>

definePageMeta({
  layout: "cover",
});

// get course content
// get user data

</script>

<style>
.main-content{
    padding-top:70px
}
</style>
