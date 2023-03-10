<template>
  <div class="pt-28 pb-32">
    <img
      :src="data.content.heroIcon.filename"
      alt=""
      class="h-20 mb-7 mx-auto"
    />
    <div class="text-center space-y-3">
      <p class="uppercase text-lila font-bold lg:text-sm text-xs">
        {{ data.content.heroIconText }}
      </p>
      <h1 class="font-sora font-semibold lg:text-4/5xl text-3xl">
        {{ data.content.heroTitle }}
      </h1>
      <p class="lg:max-w-[635px] max-w-xs mx-auto lg:text-xl text-md">
        {{ data.content.heroDescription }}
      </p>
    </div>
  </div>

  <div class="h-[433px] w-full relative flex items-center justify-center mb-20">
    <img
      :src="data.content.quoteBackground.filename"
      alt="background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      class="relative text-white max-w-md space-y-5 text-center italic lg:text-2xl"
    >
      <img :src="data.content.quoteIcon.filename" alt="" class="mx-auto" />
      <p>
        {{ data.content.quoteDescription }}
      </p>
    </div>
  </div>

  <div class="space-y-16 lg:max-w-6xl mx-auto">
    <div class="flex">
      <img
        class="w-7/12 rounded-3xl"
        :src="data.content.firstImage.filename"
        alt="image"
      />
      <div class="w-5/12 flex flex-col gap-6 items-start justify-center p-20">
        <img :src="data.content.firstIcon.filename" alt="icon" />
        <p>
          {{ data.content.firstParagraph }}
        </p>
      </div>
    </div>

    <div class="flex">
      <div
        class="w-5/12 flex flex-col gap-6 items-start justify-center p-20 h-[460px]"
      >
        <img :src="data.content.secondIcon.filename" alt="icon" />
        <p>
          {{ data.content.secondParagraph }}
        </p>
      </div>
      <div
        class="grid grid-cols-3 gap-px grid-rows-4 place-items-center w-7/12 rounded-3xl"
      >
        <div
          class="bg-lila/10 grid-item"
          v-for="icon in data.content.secondPhotoGrid"
        >
          <img :src="icon.filename" alt="icon" />
        </div>
      </div>
    </div>

    <div class="flex">
      <div
        class="grid grid-cols-3 gap-px grid-rows-4 place-items-center w-7/12 rounded-3xl"
      >
        <div
          class="bg-paleGreen/10 grid-item"
          v-for="logo in data.content.thirdPhotoGrid"
        >
          <img :src="logo.filename" alt="logo" />
        </div>
      </div>
      <div
        class="w-5/12 flex flex-col gap-6 items-start justify-center p-20 h-[460px]"
      >
        <div class="flex items-center justify-center gap-6">
          <img
            class="w-16 border rounded-xl"
            :src="data.content.profilePicture.filename"
            alt="profile picture"
          />
          <a
            href="https://www.linkedin.com/in/alexishillprados/"
            class="opacity-50 hover:opacity-100 cursor-pointer p-1.5 border rounded-lg"
          >
            <img
              :src="data.content.linkedinIcon.filename"
              alt="linkedin logo"
            />
          </a>
          <a
            href="https://www.instagram.com/alexishillprados/"
            class="opacity-50 hover:opacity-100 cursor-pointer p-1.5 border rounded-lg"
          >
            <img
              :src="data.content.instagramIcon.filename"
              alt="instagram logo"
            />
          </a>
          <a
            href="https://dribbble.com/alexishill"
            class="opacity-50 hover:opacity-100 cursor-pointer p-1.5 border rounded-lg"
          >
            <img :src="data.content.dribbbleIcon.filename" alt="dribble logo" />
          </a>
        </div>
        <div v-html="articleContent"></div>
      </div>
    </div>
  </div>

  <div class="mx-auto my-36 flex justify-center items-center">
    <p>testo di prova</p>
    <nuxt-link class="ml-5 text-sm font-bold px-4 py-1 border border-lila leading-8 rounded-lg" to="/">Let's Go!</nuxt-link>
  </div>

</template>

<script setup>
const data = await useAsyncStoryblok("about", { version: "published" });
const articleContent = computed(() =>
  renderRichText(data.value.content.thirdParagraph)
);
</script>

<style scoped>
.grid-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-item:first-child {
  border-radius: 24px 0 0 0;
}
.grid-item:nth-child(3) {
  border-radius: 0 24px 0 0;
}
.grid-item:nth-last-child(3) {
  border-radius: 0 0 0 24px;
}
.grid-item:last-child {
  border-radius: 0 0 24px 0;
}
</style>
