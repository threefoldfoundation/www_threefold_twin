<template>
  <section class="py-20 px-4 text-center">
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <div class="text-gray-700" v-html="main.content"></div>
   <div class="flex flex-wrap mt-12 mb-2">
      <div
        class="lg:w-1/5 px-1 mb-2"
        v-for="(section, index) in sections"
        :key="index"
      >
        <!-- <g-link :to="section.link"> -->
          <g-image
            class="mx-auto"
            :src="section.svg.src"
            :alt="section.title"
          />
          <div class="part py-1"
          :class="{ active: index  !== 4 }">
            <h3 class="text-2xl mb-4 font-semibold font-heading">
              <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
              {{ section.title }}
            </h3>
            <div
              class="mb-4 px-5 text-black-700"
              v-html="section.content"
            ></div>
          </div>
        <!-- </g-link> -->
      </div>
    </div>


    <div v-if="main.button">
      <a
        v-if="main.link.includes('http')"
        target="_blank"
        :href="main.link"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
        >{{ main.button }}</a
      >
      <a
        v-else
        :href="main.link"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
        >{{ main.button }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "sections"],
};
</script>

<style scoped>
.part {
  height: 160px;
  background-color: #3fffbe;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  
}

.active {
  
  background-color: #ffc3cd;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>