<template>
  <section class="py-2 px-4">
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading">
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-800 leading-relaxed" v-html="content"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="inline-block bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="inline-block bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
            :href="link"
            >{{ button }}</a
          >

          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>

      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "title",
    "content",
    "altImg",
    "image",
    "button",
    "link",
    "button2",
    "link2",
    "id",
  ],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>