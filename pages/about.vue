<template>
  <div class="pt-28 pb-32">
    <img src="~/assets/img/hat.svg" alt="" class="h-20 mb-7 mx-auto" />
    <div class="text-center space-y-3">
      <p class="uppercase text-lila font-bold text-sm">
        Use the purple inspiration hat
      </p>
      <h1 class="font-sora text-4xl">Small details for very exacting ideas!</h1>
      <p class="text-xl max-w-[635px] mx-auto">
        Call for inspiration using the purple hat for when you have inspiration
        blocks or need fresh new ideas.
      </p>
    </div>
  </div>

  <div
    class="bg-[url('~/assets/img/back.svg')] w-full bg-center h-[433px] xl:h-auto xl:bg-cover relative"
  >
    <div class="max-w-[474px]">
      <img src="" alt="" />
      {{ data }}
    </div>
    <!-- <img src="~/assets/img/back.svg" alt="background" class="w-full hidden lp:block relative"> -->
  </div>
</template>

<script setup>
const data = await useAsyncStoryblok("about", { version: "published" });
</script>