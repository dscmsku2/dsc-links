<template>

  <div class="head items-center justify-center my-4 w-full">
    <div class="flex flex-col items-center justify-center">
      
      <div class="bg-lightBlue px-6 py-2 rounded-xl mt-4 w-70 h-55 "> <img class="h-48 w-full object-cover rounded-full" src="gdsc-logo.png" alt="logo"></div>
    
      
      <div class="general-button flex flex-col justify-center text-center">
        <button  class="btn-event flex text-center  justify-center mt-6 mb-6 text-3xl bg-purple-700 text-white px-6 py-2 rounded-2xl w-90  ">
        Next Event
      </button>
        <div class="inline">
        <button class="btn-ig inline-block mt-4 mb-6 bg-gray-800 text-white px-6 py-2 rounded-lg ">
        <img class="h-10 w-10 rounded-lg " src="/ig-logo.png">
      </button>

        <button class="btn-discord mt-4 bg-blue-400 text-white px-6 py-2 rounded-lg ">
        <img class="h-10 w-10 rounded-lg " src="/discord.png">
      </button>
      
      <button class="btn-twitter inline mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg ">
        <img class="h-10 w-10 rounded-lg " src="/tw-logo.png">
      </button>
      
      <div class=" bottom-div block-flex justify-center items-center" >
        <button class="btn-whatsapp inline mt-4 bg-green-600 text-white px-6 py-2 rounded-lg ">
        <img class=" rounded-lg w-10 h-10 " src="/wp-logo.png">
      </button>

      <button class="btn-github mt-4 bg-gray-200 text-white px-6 py-2 rounded-lg ">
       <img class="h-10 w-10 rounded-lg " src="/github.png">
      </button>

      <button class="btn-youtube inline  mt-4 mb-1 bg-gray-900 text-white px-6 py-2 rounded-lg">
        <img class="h-10 w-10 rounded-lg " src="/yt-logo.png">
      </button>
      
      </div>
      
      </div>

      </div>

      
     
    </div>
    <p class="flex flex-col text-center font-sans justify-center"> <b>... </b> </p>
    <p class =" flex flex-col text-center font-sans font-30  justify-center"> Created By DSC MSKU Core Team </p>
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

<style>
.general-button{
   margin-top:30px;
  background-position:center;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size:100%;
  justify-content:center;
}
.btn-event:hover{
  @apply bg-gray-800;
}
.btn-github:hover{
  @apply bg-gray-800;
}
.btn-youtube:hover{
  @apply bg-gray-100;
}
.btn-twitter:hover{
  @apply bg-blue-400;
}
.btn-ig:hover{
  @apply bg-gray-300;
}
.btn-whatsapp:hover{
  @apply bg-gray-800;
}
.btn-discord:hover{
  @apply bg-gray-800;
}


</style>
