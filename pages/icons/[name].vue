<template>
  
  <div class="bg-lightGray absolute w-full">

    <div class="bg-white">
      <div class="pt-20 pb-28 md:max-w-md max-w-xs mx-auto text-center ">
        <img :src="data.content.icon" alt="icon" class="mx-auto py-5 box-content">
        <p class="font-sora pt-2 pb-3 
        font-semibold text-3xl">{{ data.content.title }}</p>
        <p class="text-darkBlue/50 text-sm ">{{ data.content.description }}</p>
      </div>
    </div>
      
    <div class="columns-2 md:columns-3 lp:columns-5 lg:columns-4 lg:px-14 px-3 relative bottom-10 lg:gap-8 gap-3">
      <div v-for="image,index in data.content.gallery"  class="lg:mb-8 mb-3 border-8 border-white hover:cursor-pointer" @click="openModal(index)">
        <nuxt-img preload provider="storyblok" :format="image?.filename.slice(-3) == 'svg' ? '' : 'webp' " loading="lazy" :src="image?.filename ?? '#'" alt="image" class="bg-white w-full border border-innerShadow" />
      </div>
    </div>

  </div>

  <div v-show="showModal" class="w-full h-full fixed flex items-center bg-darkBlue/50" @click="closeModal()">
    <div class="flex w-full justify-center max-h-screen">
      <button @click.stop="previousImage()" class="lg:block hidden">
        <img src="~/assets/img/left-arrow.svg" alt="left arrow icon" class="w-16 bg-white rounded-full shadow relative left-8 select-none" :class="{'opacity-50 cursor-not-allowed': selectedImage==0}">
      </button>
      <div class="max-w-5xl h-full lg:border-15 border-5 border-white" @click.stop="">
        <img :src="data.content.gallery[selectedImage]?.filename ?? '#'" alt="image" class="h-full border border-innerShadow bg-white" />
      </div>
      <button @click.stop="nextImage()" class="lg:block hidden">
        <img src="~/assets/img/right-arrow.svg" alt="right arrow icon" class="w-16 bg-white rounded-full shadow relative right-8 select-none" :class="{'opacity-50 cursor-not-allowed': selectedImage==data.content.gallery.length - 1}" >
      </button>
    </div>
  </div>
  
</template>

<script setup>
  const route = useRoute()
  const data = await useAsyncStoryblok(`icons/${route.params.name}`, { version: 'published' })

  const showModal = ref(false)
  const selectedImage = ref(0)

  function openModal(index){
    showModal.value = true
    selectedImage.value = index
    console.log(showModal.value);
    console.log(index);
  }
  function closeModal(){
    showModal.value = false
    console.log(showModal.value);
  }
  function previousImage(){
    if(selectedImage.value > 0)
      selectedImage.value--
  }
  function nextImage(){
    if(selectedImage.value < data.value.content.gallery.length - 1)
      selectedImage.value++
  }


  onMounted(() => {
    document.onkeydown = (e) => {
      e = e || window.event
      if (e.key === "ArrowLeft") {
        previousImage()
      } 
      else if (e.key === "ArrowRight") {
        nextImage()
      }
      else if(e.key === "Escape"){
        closeModal()
      }
    };
  })


</script>


