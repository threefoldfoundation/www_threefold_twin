<template>
  <section>
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none text-center py-16 green"
        :class="{ teal: index % 2 !== 0 }"
      >
        <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading">
          {{ section.title }}
        </h2>
        <div class="w-1/2 mx-auto">
          <g-image :src="section.image" :alt="section.title" />
        </div>
        <h3 class="text-2xl w-1/2 mx-auto mb-6 font-semibold">
          {{ section.subtitle }}
        </h3>
        <div
          class="w-3/4 mx-auto mt-10 mb-8 text-gray-700 leading-relaxed"
          v-html="section.content"
        ></div>
        <div v-if="section.button">
          <a
            v-if="section.link.includes('http')"
            target="_blank"
            class="inline-block bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
            :href="section.link"
            >{{ section.button }}</a
          >

          <a
            v-else
            class="inline-block bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
            :href="section.link"
            >{{ section.button }}</a
          >

          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["sections"],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>

<style scoped>
.green {
  background-color: #e4ffe6;
}

.teal {
  background-color: #e8fff6;
}
</style>