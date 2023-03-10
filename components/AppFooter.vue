<template>
  <footer
    class="md:max-w-6xl mx-auto md:flex md:items-center md:justify-between py-7 border-t border-darkBlue/10 text-xs text-darkBlue/50 px-4"
  >
    <div
      class="md:flex md:items-start md:space-x-6 text-center md:text-left mb-4 md:mb-0"
    >
      <p class="font-semibold text-darkBlue mb-2 md:mb-0">
        2022 CallToInspiration · Tutti i diriti riservati
      </p>
      <nuxt-link to="/about" class="font-medium">About CTI</nuxt-link>
      <a href="#" class="font-medium">Privacy</a>
    </div>

    <a
      href="https://dribbble.com/alexishill"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center space-x-2"
    >
      <span>by</span>
      <img src="~/assets/img/alexis.png" alt="profile picture" />
      <span class="font-medium">Alexis Hill</span>
    </a>
  </footer>
</template>
