4<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container mx-auto">
      <Header
        :id="$page.markdownPage.id"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :content="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      />

      <SignUp
        v-if="$page.markdownPage.signup"
        :signup="$page.markdownPage.signup"
      />

      <!-- <SolutionsHeader
        v-if="$page.markdownPage.header2"
        :header="$page.markdownPage.header2"
      /> -->

      <g-image
        class="m-auto mt-16 md:w-1/2"
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />

      <ShowcaseProducts
        :main="$page.markdownPage.productsMain"
        :products="$page.markdownPage.productData"
        v-if="
          $page.markdownPage.productData &&
          $page.markdownPage.productData.length > 0
        "
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <logoShowcase
        v-if="$page.markdownPage.logos.length > 0"
        :logos="$page.markdownPage.logos"
      />

      <Testimonials
        v-if="$page.markdownPage.testimonialsSecs"
        :sections="$page.markdownPage.testimonialsSecs"
      />
    </div>

    <g-image
      class="hidden md:block"
      v-if="$page.markdownPage.solution_image2"
      :src="$page.markdownPage.solution_image2.src"
    />
    <g-image
      class="sm:hidden"
      v-if="$page.markdownPage.solution_image4"
      :src="$page.markdownPage.solution_image4.src"
    />
    <div class="container mx-auto">
      <Comparison2
        v-if="
          $page.markdownPage.comparisonSecs2 &&
          $page.markdownPage.comparisonSecs2.length > 0
        "
        :main="$page.markdownPage.comparisonMain2"
        :sections="$page.markdownPage.comparisonSecs2"
      />

      <Comparison
        v-if="
          $page.markdownPage.homeComparisonSecs &&
          $page.markdownPage.homeComparisonSecs.length > 0
        "
        :main="$page.markdownPage.homeComparisonMain"
        :sections="$page.markdownPage.homeComparisonSecs"
      />

      <g-image
        class="m-auto px-6 py-4"
        v-if="$page.markdownPage.solution_image3"
        :src="$page.markdownPage.solution_image3.src"
      />

      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <!-- <NewCard
      v-for="card in $page.markdownPage.cards"
      :key="card.id"
      :card="card"
    /> -->

      <!-- <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    /> -->
    </div>
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        metaTitle
        metaDesc
        metaImg
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
        solution_image
        solution_image2
        solution_image3
        solution_image4
        productsMain{
          id
          title
          subtitle
          image
        }
        productData{
         id
         title
         content
         image
         url
        }
        header{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
        }
        header2{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
        }
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        homeComparisonMain{
          id
          title
          content
          button
          link
        }
        homeComparisonSecs{
          id
          svg
          title
          content
        }
        comparisonMain2{
          id
          title
          content
          button
          link
        }
        comparisonSecs2{
          id
          svg
          title
          content
        }
        testimonialsSecs{
          id
          image
          content
          url
          company
          name
          imageperson 
          urlperson 
        }
        cta{
          id
          title
          content
          button
          link
        }
        logos{
          id
          image
          url
        }
        inTheNews {
          id
          content
          partners {
            path
            logo
          }
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
    }  
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import Comparison2 from "~/components/custom/sections/Comparison2.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import Testimonials from "~/components/marketing/sections/cta-sections/Testimonials.vue";

export default {
  components: {
    Header,
    ShowcaseProducts,
    SolutionsHeader,
    NewCard,
    CallToAction,
    logoShowcase,
    Comparison,
    Comparison2,
    InTheNews,
    SignUp,
    Testimonials,
  },
  mounted() {
    console.log(this.$page.markdownPage.comparisonMain);
  },
  computed: {
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
};
</script>