<template>

<!-- Schermata di caricamento -->
<!-- 
<div v-if="pending" class="w-screen h-screen bg-black flex items-center justify-center text-white text-9xl">
    Loading ...
</div> -->
<div class="w-full flex-col flex py-20 items-center bg-gradient-to-b from-topGradient">
    <img :src="index.content.logo" alt="" class="w-20">
    <img :src="index.content.title" alt="" class="w-64 pt-3 pb-1">
    <p class="font-medium text-darkBlue/50 text-sm ">{{ index.content.description }}</p>
</div>


<div class="max-w-6xl mx-auto lg:px-7 grid grid-cols-3 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 pb-48">
    <nuxt-link :to="`/icons/${story.slug}`" v-for="story in icons.stories" class="flex flex-col items-center pb-4 h-36 rounded-xl hover:border border-darkBlue/10 ">
        <div class="h-full grid items-center">
            <img :src="story.content.icon" alt="icon" class="">
        </div>
        <p class="text-sm">{{ story.content.title }}</p>
    </nuxt-link> 
</div>


<Footer />

</template>
  
  
<script setup>
  const baseUrl = 'https://api.storyblok.com/v2/cdn/stories/'
  const token = '&token=uiHAQzxUn1tVtEmEZRrKZwtt'
  const version = '&version=published'

  const { data: icons } = await useFetch(`${baseUrl}?starts_with=icons${version+token}&per_page=100`)
  const index = await useAsyncStoryblok('index', { version: 'published' })


  </script>

