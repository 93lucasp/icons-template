<template>
  <div class="md:max-w-md max-w-xs mx-auto text-center mb-16 pt-16">
    <img :src="data.content.icon" alt="icon" class="mx-auto py-5" />
    <p class="font-sora pt-2 pb-3 font-semibold text-3xl">
      {{ data.content.title }}
    </p>
    <p class="text-darkBlue/50 text-sm">{{ data.content.description }}</p>
  </div>

  <div
    class="columns-2 md:columns-3 lp:columns-5 lg:columns-4 lg:px-14 px-3 relative lg:gap-8 gap-3 pb-28"
  >
    <div class="bg-lightGray absolute top-16 inset-x-0 bottom-0" />
    <div
      v-for="(image, index) in data.content.gallery"
      :key="index"
      class="lg:mb-8 mb-3 border-8 border-white hover:cursor-pointer relative"
      @click="openModal(index)"
    >
      <nuxt-img
        preload
        provider="storyblok"
        :format="image?.filename.slice(-3) == 'svg' ? '' : 'webp'"
        loading="lazy"
        :src="image?.filename ?? '#'"
        alt="image"
        class="bg-white w-full border border-innerShadow"
      />
    </div>
  </div>

  <app-modal ref="modal">
    <button
      @click.stop="previousImage()"
      class="absolute top-1/2 -left-8 opacity-20 hover:opacity-100"
      :class="{ 'opacity-20 cursor-not-allowed': selectedImage == 0 }"
    >
      <img src="~/assets/img/left-arrow.svg" alt="left arrow icon" />
    </button>

    <img
      :src="data.content.gallery[selectedImage]?.filename ?? '#'"
      alt="image"
      class="h-full border border-innerShadow bg-white mx-auto"
    />

    <button
      @click.stop="nextImage()"
      class="absolute top-1/2 -right-8 opacity-20 hover:opacity-100"
      :class="{
        'opacity-20 cursor-not-allowed':
          selectedImage == data.content.gallery.length - 1,
      }"
    >
      <img src="~/assets/img/right-arrow.svg" alt="right arrow icon" />
    </button>
  </app-modal>
</template>

<script setup>
const route = useRoute();

const data = await useAsyncStoryblok(`icons/${route.params.name}`, {
  version: "published",
});

const selectedImage = ref(0);

const modal = ref(null);

function openModal(index) {
  selectedImage.value = index;
  modal.value.openModal();
}

function previousImage() {
  if (selectedImage.value > 0) selectedImage.value--;
}

function nextImage() {
  if (selectedImage.value < data.value.content.gallery.length - 1)
    selectedImage.value++;
}

onMounted(() => {
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      modal.value.closeModal();
    }
  };
});
</script>
