<template>
  <div>
    <section class="py-12 px-0 text-center" v-if="cta.id == 'life_cta'">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-4xl leading-tight font-semibold font-heading">
          {{ cta.title }}
        </h2>
        <div v-html="cta.content" class="text-gray-700 my-5"></div>
        <g-link
          v-if="cta.button"
          class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold shadow rounded-full"
          :to="cta.link"
          >{{ cta.button }}</g-link
        >
      </div>
      <g-image
        v-if="cta.image"
        :src="img"
        :alt="cta.title"
        class="py-10 w-full"
      ></g-image>
    </section>

    <section class="py-12 px-0 text-center p2p" v-else-if="cta.id == 'p2p_cta'">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-4xl leading-tight font-semibold font-heading">
          {{ cta.title }}
        </h2>
        <div v-html="cta.content" class="text-gray-700 my-5"></div>
        <g-link
          v-if="cta.button"
          class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold shadow rounded-full"
          :to="cta.link"
          >{{ cta.button }}</g-link
        >
      </div>
      <g-image
        v-if="cta.image"
        :src="img"
        :alt="cta.title"
        class="py-10 w-1/3 mx-auto"
      ></g-image>
    </section>

    <section class="py-12 px-0 text-center" v-else>
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-4xl leading-tight font-semibold font-heading">
          {{ cta.title }}
        </h2>
        <div v-html="cta.content" class="text-gray-700 my-5"></div>
        <g-link
          v-if="cta.button"
          class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold shadow rounded-full"
          :to="cta.link"
          >{{ cta.button }}</g-link
        >
      </div>
      <g-image
        v-if="cta.image"
        :src="img"
        :alt="cta.title"
        class="py-10  mx-auto"
      ></g-image>
    </section>
  </div>
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

<style scoped>
.p2p {
  background-color: #f2feff;
}
</style>