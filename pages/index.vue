<template>
  <div class="head items-center justify-center my-4 w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="bg-lightBlue px-6 py-2 rounded-xl mt-4 w-70 h-55">
        <img
          class="h-48 w-full object-cover rounded-full"
          src="~/assets/images/gdsc-logo.png"
          alt="logo"
        />
      </div>

      <div class="general-button flex flex-col justify-center text-center">
        <a
          :href="link.link"
          class="btn-event flex text-center justify-center mb-3 text-3xl px-6 py-2 rounded-2xl w-90"
          :style="{
            color: link.textColor,
            'background-color': link.bgColor,
          }"
          v-for="link in props.links"
          :key="link.link"
        >
          {{ link.title }}
        </a>
        <div class="flex justify-between">
          <a
            class="btn-ig inline-block mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg"
            :href="props.instagram"
          >
            <img
              class="h-10 w-10 rounded-lg"
              src="~/assets/images/ig-logo.png"
            />
          </a>

          <a
            :href="props.discord"
            class="btn-discord mt-4 bg-blue-400 text-white px-6 py-2 rounded-lg"
          >
            <img
              class="h-10 w-10 rounded-lg"
              src="~/assets/images/discord.png"
            />
          </a>

          <a
            :href="props.twitter"
            class="btn-twitter inline mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg"
          >
            <img
              class="h-10 w-10 rounded-lg"
              src="~/assets/images/tw-logo.png"
            />
          </a>
        </div>
        <div class="bottom-div block-flex justify-center items-center">
          <button
            class="btn-whatsapp inline mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            <img
              class="rounded-lg w-10 h-10"
              src="~/assets/images/wp-logo.png"
            />
          </button>

          <button
            class="btn-github mt-4 bg-gray-200 text-white px-6 py-2 rounded-lg"
          >
            <img
              class="h-10 w-10 rounded-lg"
              src="~/assets/images/github.png"
            />
          </button>

          <button
            class="btn-youtube inline mt-4 mb-1 bg-gray-900 text-white px-6 py-2 rounded-lg"
          >
            <img
              class="h-10 w-10 rounded-lg"
              src="~/assets/images/yt-logo.png"
            />
          </button>
        </div>
      </div>
    </div>

    <p class="flex flex-col text-center font-sans justify-center">
      <b>... </b>
    </p>
    <p class="flex flex-col text-center font-sans font-30 justify-center">
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
.general-button {
  margin-top: 30px;
  background-position: center;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  justify-content: center;
}
.btn-event:hover {
  @apply bg-gray-800;
}
.btn-github:hover {
  @apply bg-gray-800;
}
.btn-youtube:hover {
  @apply bg-gray-100;
}
.btn-twitter:hover {
  @apply bg-blue-400;
}
.btn-ig:hover {
  @apply bg-gray-300;
}
.btn-whatsapp:hover {
  @apply bg-gray-800;
}
.btn-discord:hover {
  @apply bg-gray-800;
}
</style>
