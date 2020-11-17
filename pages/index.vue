<template>
  <div class="container my-4 w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="bg-green-500 w-32 h-32 rounded-full"></div>
      <h1 class="text-2xl font-bold">Muğla Sıtkı Koçman Üniversitesi</h1>
      <h1 class="my-2 text-sm">Developers Student Club</h1>
      <button class="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full">
        Github Etkinliği
      </button>
      <button class="mt-4 bg-red-850 text-white px-4 py-2 rounded-lg w-full">
        <span class="mdi mdi-youtube"></span> Youtube
      </button>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
        <span class="mdi mdi-twitter"></span> Twitter
      </button>
      <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        <span class="mdi mdi-facebook"></span> Facebook
      </button>
      <button class="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full">
        <span class="mdi mdi-whatsapp"></span> Whatsapp
      </button>
      <button class="mt-4 bg-blue-400 text-white px-4 py-2 rounded-lg w-full">
        <span class="mdi mdi-discord"></span> Discord
      </button>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      },
    ],
  },
}
</script>

<style></style>
