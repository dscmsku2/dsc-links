<template  >

  <div class=" bg-gradient-to-t container my-4 w-full">
    <div class=" bg-gradient-to-t div-head flex flex-col items-center justify-center">
      
      <div class="bg-blue-500 px-6 py-2 rounded-xl mt-4 w-70 h-55 "> <img class="h-48 w-full object-cover rounded-full" src="gdsc-logo.png" alt="logo"></div>
    
      <button  class="btn-github mt-6 mb-6 text-3xl bg-purple-700 text-white px-6 py-2 rounded-2xl w-90  ">
        Next Event
      </button>
      <div class="inline">

    
      <button class=" inline btn-youtube mt-4 bg-red-700 text-white px-6 py-2 rounded-lg">
        <span class="mdi w-full rounded-lg mdi-youtube"></span> 
      </button>
      <button class="btn-twitter inline mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg ">
        <span class="mdi mdi-twitter"></span> 
      </button>
      <button class="btn-ig inline-block mt-4 mb-6 bg-red-600 text-white px-6 py-2 rounded-lg ">
        <span class="mdi mdi-instagram"></span> 
      </button>
      <div class=" block-flex justify-center items-center" >
        <button class=" inline btn-whatsapp mt-4 bg-green-600 text-white px-6 py-2 rounded-lg ">
        <span class=" inline mdi mdi-whatsapp"></span> 
      </button>
      <button class="btn-discord mt-4 bg-blue-400 text-white px-6 py-2 rounded-lg ">
        <span class="mdi mdi-discord"></span> 
      </button>
      <button class="btn-github mt-4 bg-gray-600 text-white px-6 py-2 rounded-lg ">
        <span class="mdi mdi-git "></span> 
      </button>
      </div>
      
      </div>
     
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

<style>


.btn-github:hover{
  @apply bg-gray-800;
}
.btn-youtube:hover{
  @apply bg-gray-800;
}
.btn-twitter:hover{
  @apply bg-gray-800;
}
.btn-ig:hover{
  @apply bg-gray-800;
}
.btn-whatsapp:hover{
  @apply bg-gray-800;
}
.btn-discord:hover{
  @apply bg-gray-800;
}


</style>
