<template>
  <div
    class="w-full flex-col flex py-20 items-center bg-gradient-to-b from-topGradient"
  >
    <img :src="index.content.logo" alt="" class="w-20" />
    <!-- For the title should be an h1 not an img -->
    <img :src="index.content.title" alt="" class="w-64 pt-3 pb-1" />
    <p class="font-medium text-darkBlue/50 text-sm">
      {{ index.content.description }}
    </p>
  </div>

  <div
    class="max-w-6xl mx-auto lg:px-7 pb-48 grid grid-cols-3 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5"
  >
    <nuxt-link
      :to="`/icons/${icon.slug}`"
      v-for="icon in icons"
      :key="icon.id"
      class="h-40 rounded-xl hover:border border-darkBlue/10 text-center flex items-center justify-center"
    >
      <div>
        <div class="h-16 flex items-center justify-center mb-4">
          <img :src="icon.content.icon" alt="icon" class="" />
        </div>
        <span class="text-sm">{{ icon.content.title }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const icons = ref(null);

const storyblokApi = useStoryblokApi();

const { data } = await useAsyncData(
  "vue",
  async () =>
    await storyblokApi.get(`cdn/stories/`, {
      version: "published",
      starts_with: "icons/",
      per_page: 100,
    })
);

icons.value = data.value.data.stories;

const index = await useAsyncStoryblok("index", { version: "published" });
</script>
