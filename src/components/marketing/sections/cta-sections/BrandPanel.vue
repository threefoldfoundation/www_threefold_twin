<template>
  <div class="">
    <div class="max-w-screen-xl mx-auto md:py-10">
      <!-- why -->
      <div
        v-if="id == 'why'"
        class="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div class="relative pb-3/5 -mt-6 md:pb-1/2">
          <g-image
            class="absolute pt-5 inset-0 w-full h-full translate-x-0 translate-y-center rounded-md object-fill object-left-top sm:translate-x-0 lg:translate-y-20"
            :src="image"
            :alt="brand.title"
          />
        </div>
        <div class="px-6 sm:px-10 lg:pr-0 xl:px-15 text-center lg:text-left">
          <div class="lg:self-center">
            <h2
              class="text-4xl mb-2 uppercase leading-tight font-semibold font-heading"
            >
              <span class="block">{{ brand.title }}</span>
              <span class="block" v-if="brand.subtitle">{{
                brand.subtitle
              }}</span>
            </h2>
            <div class="py-6 mt-4 text-gray-900" v-html="brand.content"></div>
            <a
              v-if="brand.btnTxt"
              target="_blank"
              :href="brand.sourceUrl"
              class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-white px-12 py-2 mr-3 shadow rounded-full"
              >{{ brand.btnTxt }}</a
            >
          </div>
        </div>
      </div>

      <div
        v-else
        class="brandpanel bg-gray-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div
          class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-15"
        >
          <div class="lg:self-center">
            <h2
              class="text-3xl leading-9 font-extrabold text-white sm:leading-10"
            >
              <span class="block">{{ brand.title }}</span>
              <span class="block" v-if="brand.subtitle">{{
                brand.subtitle
              }}</span>
            </h2>
            <div class="py-6 mt-4 mx-4 text-white" v-html="brand.content"></div>
            <!-- <a
              :href="brand.sourceUrl"
              class="bg-teal-300 text-sm learn-button hover:bg-57EEF8-400 text-gray-900 px-12 py-2 mr-3 rounded shadow rounded-full"
              >{{ brand.btnTxt }}</a
            > -->
          </div>
        </div>
        <div class="relative pb-3/5 -mt-6 md:pb-1/2">
          <g-image
            class="absolute brandpanel inset-0 w-full h-full transform translate-x-0 translate-y-6 rounded-md object-fill object-left-top sm:translate-x-0 lg:translate-y-20"
            :src="image"
            :alt="brand.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["brand", "id"],
  computed: {
    image() {
      return this.brand.image.src
        ? this.brand.image.src
        : require(`!!assets-loader!@images/brandPanel/${this.brand.image}`);
    },
  },
};
</script>