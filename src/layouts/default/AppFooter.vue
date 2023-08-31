<template>
  <v-footer  color="background" class="appfooter__container">
    <div class="appfooter__content">
      <span class="pr-1">
        © {{ new Date().getFullYear() }} | creado con
        <strong> vue 3 TypeScript </strong></span
      >
      <v-btn
      aria-label="social-network"
        v-for="icon in icons"
        :key="icon.id"
        :icon="icon.icon"
        variant="text"
        size="small"
        :href="icon.link" target="_blank"
      ></v-btn>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { mdiLinkedin, mdiGithub } from '@mdi/js'

const icons = ref([
  {
    id: 0,
    link: "https://linkedin.com/in/daniel-lopezj/",
    icon: mdiLinkedin,
  },
  {
    id: 1,
    link: "https://github.com/daniellopezj",
    icon: mdiGithub,
  },
]);

</script>

<style scoped lang="scss">
.appfooter {
  &__container {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    font-size: 0.9rem ;
    opacity: 0.85;
  }
  &__content {
  margin: auto;
  }
}
</style>
