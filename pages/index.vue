<template>
  <div class="head items-center justify-center w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="my-6 w-logo">
        <img
          class="object-cover"
          src="~/assets/images/dsc-logo.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="my-4 flex flex-col justify-center text-center">
        <a
          :href="link.link"
          class="btn-event flex text-center justify-center mb-3 text-2xl px-6 py-1 rounded-lg w-90 bg-opacity-25"
          :style="{
            color: link.textColor,
            'background-color': link.bgColor,
          }"
          v-for="link in props.links"
          :key="link.link"
        >
          {{ link.title }}
        </a>
        <div class="flex justify-evenly">
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.instagram"
            >
              <span class="mdi mdi-instagram text-white text-3xl"></span>
            </a>
          </div>
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.discord"
            >
              <span class="mdi mdi-discord text-white text-3xl"></span>
            </a>
          </div>
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.twitter"
            >
              <span class="mdi mdi-twitter text-white text-3xl"></span>
            </a>
          </div>
        </div>
        <div class="flex justify-evenly">
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.whatsapp"
            >
              <span class="mdi mdi-whatsapp text-white text-3xl"></span>
            </a>
          </div>
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.github"
            >
              <span class="mdi mdi-git text-white text-3xl"></span>
            </a>
          </div>
          <div class="px-2">
            <a
              class="mt-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-content-center px-6 rounded-lg"
              :href="props.youtube"
            >
              <span class="mdi mdi-youtube text-white text-3xl"></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <p class="flex flex-col text-center font-sans justify-center text-gray-500">
      <b>... </b>
    </p>
    <p
      class="text-gray-500 flex flex-col text-center font-sans font-30 justify-center"
    >
      Created By DSC MSKU Core Team
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.props = require('~/links.json')
  },
  mounted() {
    if (this.$fire.messaging && process.client) {
      this.$fire.messaging
        .getToken()
        .then((currentToken) => console.log(currentToken))
    }
  },
  data() {
    return {
      props: {},
    }
  },
}
</script>

<style>
.w-logo {
  width: 50rem;
}
</style>
