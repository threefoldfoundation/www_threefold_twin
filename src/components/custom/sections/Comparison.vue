<template>
  <section class="py-12 md:mt-20 text-center advantage" v-if="id == 'why'">
    <h2
      class="text-4xl mb-2 leading-tight font-semibold font-heading"
      v-if="main.title"
    >
      {{ main.title }}
    </h2>
    <div class="container mx-auto">
      <div
        class="text-gray-700"
        v-if="main.content"
        v-html="main.content"
      ></div>
      <div class="flex flex-wrap items-center mx-8 mt-12 mb-2">
        <div
          class="lg:w-1/3 px-6 mb-8"
          v-for="(section, index) in sections"
          :key="index"
        >
          <g-image
            class="w-2/4 mx-auto mb-8"
            :src="section.svg.src"
            :alt="section.title"
          />
          <h3 class="text-2xl mb-4 font-semibold font-heading">
            <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
            <span>{{ section.title }}</span>
          </h3>
          <div class="text-gray-700" v-html="section.content"></div>
        </div>
      </div>
      <div>
        <g-link
          v-if="main.button"
          class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
          :to="main.link"
          >{{ main.button }}</g-link
        >
      </div>
    </div>
  </section>

  <section class="py-12 text-center steps" v-else-if="id == 'dt_for_life'">
    <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <div class="text-gray-700" v-if="main.content" v-html="main.content"></div>
    <div class="flex flex-wrap items-center mt-12 md:mx-20 mb-2">
      <div
        class="lg:w-1/4 md:px-2 mb-2"
        v-for="(section, index) in sections"
        :key="index"
      >
        <!-- <g-link :to="section.link"> -->
        <g-image class="mx-auto" :src="section.svg.src" :alt="section.title" />
        <div class="part2 py-1">
          <h3 class="text-xl mb-4 mx-4 font-semibold md:h-20">
            <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
            {{ section.title }}
          </h3>
          <div class="mb-4 px-5 text-black-700 md:h-32" v-html="section.content"></div>
          <div class="py-6" v-if="section.button">
            <a
              v-if="section.link.includes('http')"
              target="_blank"
              :href="section.link"
              class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
              >{{ section.button }}</a
            >
            <a
              v-else
              :href="section.link"
              class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-12 py-2 mr-5 font-semibold rounded shadow rounded-full"
              >{{ section.button }}</a
            >
          </div>
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

  <section class="py-12 px-4 text-center" v-else>
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <div class="text-gray-700" v-if="main.content" v-html="main.content"></div>
    <div class="flex flex-wrap items-center mt-12 mb-2">
      <div
        class="lg:w-1/3 md:px-6 mb-2"
        v-for="(section, index) in sections"
        :key="index"
      >
        <!-- <g-link :to="section.link"> -->
        <g-image class="mx-auto" :src="section.svg.src" :alt="section.title" />
        <div class="part py-1">
          <h3 class="text-xl mb-4 font-medium font-heading">
            <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
            {{ section.title }}
          </h3>
          <div class="mb-4 px-5 text-black-700" v-html="section.content"></div>
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
  props: ["main", "sections", "id"],
};
</script>

<style scoped>
.part {
  height: 160px;
  background-color: #f2f2f2;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.part2 {
  height: 350px;
  background-color: #ebfffe;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>