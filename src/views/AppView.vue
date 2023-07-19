<template>
  <div class="view">
    <NavigationPage />

    <HomeView v-if="$route.path !== '/faqs'" />

    <AboutView v-if="$route.path !== '/faqs'" />

    <FeaturesPage v-if="$route.path !== '/faqs'" />

    <ContactView />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import HomeView from "@/components/HomeView.vue";
import FeaturesPage from "@/components/FeaturesPage.vue";
import AboutView from "@/components/AboutView.vue";
import ContactView from "@/components/ContactView.vue";

export default {
  name: "AppView",
  components: {
    NavigationPage,
    HomeView,
    FeaturesPage,
    AboutView,
    ContactView,
  },
};
</script>
