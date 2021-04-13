<template>
  <section class="py-12 px-0 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-4xl leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="text-2xl mt-2 mb-8 text-gray-900 leading-relaxed"
      ></div>
      <g-link
        v-if="cta.button"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
        :to="cta.link"
        >{{ cta.button }}</g-link
      >
    </div>
    <g-image
      v-if="cta.image"
      :src="img"
      :alt="cta.title"
      class="mt-10 w-full"
    ></g-image>
  </section>
</template>

<script>
export default {
  props: ["cta"],
  computed: {
    img() {
      if (!this.cta.image) return "";
      if (this.cta.image.src) return this.cta.image.src;
      return this.cta.image;
    },
  },
};
</script>