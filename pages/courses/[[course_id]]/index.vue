<template>
    <main>
        <img class="w-full" src="@/assets/cover.jpg" alt="cover">
        <button class="w-full rounded-lg mt-10 bg-green-600 p-8 text-2xl text-white font-bold">
            Start Course
        </button>
    </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "cover",
});
</script>

<style>
.main-content{
    padding-top:70px
}
</style>
