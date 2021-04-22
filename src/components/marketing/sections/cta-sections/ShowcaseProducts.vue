<template>
  <div class="py-8 px-2">
    <div class="w-full text-center">
      <p v-if="main !== null" class="text-gray-700">
        {{ main.subtitle }}
      </p>
      <h1
        v-if="main !== null"
        class="text-4xl mt-2 mb-6 leading-tight font-heading"
      >
        {{ main.title }}
      </h1>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <a
        v-for="(product, idx) in products"
        :key="idx"
        :href="product.url"
        class="text-center cursor-pointer"
      >
        <div class="m-auto max-w-sm rounded overflow-hidden">
          <g-image :src="img(product.image)" />
          <div class="px-2 product">
            
            <div class="font-medium text-xl pt-2 mb-2">{{ product.title }}</div>
            <div v-html="product.content" class="text-gray-700"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  props: ["products", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
.bannerFondo {
  height: 400px;
}

.product {
  height: 160px;
  background-color: #f2f2f2;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  
}
/* img {
  cursor: default !important;
} */
</style>
