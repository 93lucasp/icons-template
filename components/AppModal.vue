<template>
  <div
    v-if="isOpen"
    class="fixed w-full h-full bg-black bg-opacity-20 z-20"
    @click="closeModal()"
  />
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed z-50 inset-x-0 m-2 inset-y-12 md:w-7/12 md:mx-auto rounded-2xl bg-white overflow-x-hidden p-10"
    >
      <button @click="closeModal()" class="absolute top-4 right-4">
        <img src="~/assets/img/close.svg" alt="" class="h-4" />
      </button>
      <section class="relative h-full">
        <slot />
      </section>
    </div>
  </Transition>
</template>

<script setup>
const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

defineExpose({
  openModal,
  closeModal,
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
