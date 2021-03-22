<template>
  <div class="flex app px-0 sm:px-4 pb-4">
    <div class="post-card-image-link px-1">
      <g-image
        :src="img(app.image)"
        :alt="app.title"
        class="post-card-image"
      ></g-image>
    </div>
    <!-- <div>
      <g-link :to="path">
        <h2 class="post-card-title mt-3">{{ app.title || app.name }}</h2>
        <p class="post-card-excerpt text-gray-700">{{ app.excerpt }}</p>
        <section
          class="flex flex-wrap post-tags container mx-auto relative py-1"
        >
          <g-link
            v-for="membership in memberships"
            :key="membership.id"
            :to="membership.path"
            class="text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2"
            >{{ membership.title }}</g-link
          >
        </section>
      </g-link>

      <div class="w-full post-card-meta pt-2">
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list m-0">
                <li
                  v-for="author in app.authors"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="img(author.image)"
                      :alt="author.name"
                      class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>

            <div class="flex flex-col text-xs leading-none uppercase">
              <p>
                <g-link :to="path">
                  <time :datetime="app.datetime">{{
                    app.humanTime
                  }}</time>
                </g-link>
              </p>
              <p>
                <g-link :to="path">
                  <time :datetime="app.datetime">{{
                    app.startDate
                  }}</time>
                </g-link>
                {{ app.status }}
              </p>
            </div>
          </div>
          <section
            class="post-tags container mx-auto relative py-3"
            v-if="displaytags()"
          >
            <g-link
              v-for="tag in app.tags"
              :key="tag.id"
              :to="tag.path"
              class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
              >{{ tag.title }}</g-link
            >
          </section>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["app"],

  computed: {
    path() {
      if (this.pathPrefix) return this.pathPrefix + "/" + this.app.id;
      return this.app.path;
    },

    memberships() {
      var res = [];
      var memberships = this.app.memberships;
      if (!memberships) {
        return [];
      }
      memberships.forEach(function (membership) {
        if (["foundation", "tech", "cofounders"].includes(membership.title)) {
          res.push(membership);
        }
      });
      return res;
    },
  },
  methods: {
    displaytags() {
      return this.showtags;
    },
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
  mounted() {
    console.log(this.app);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.post-card-excerpt {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}
.post-card-image {
  max-width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .app {
    flex: 1 1 auto;
  }
}
</style>
