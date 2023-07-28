<template>
  <v-footer  color="background" class="appfooter__container">
    <div class="appfooter__content">
      <span class="pr-1">
        © {{ new Date().getFullYear() }} | creado con
        <strong> vue 3 TypeScript </strong></span
      >
      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        :icon="icon.icon"
        variant="text"
        size="small"
        @click="goTo(icon.link)"
      ></v-btn>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const icons = ref([
  {
    id: 0,
    link: "https://github.com/ldani-dev",
    icon: "mdi-linkedin",
  },
  {
    id: 1,
    link: "https://www.linkedin.com/in/dani-dev/",
    icon: "mdi-github",
  },
]);

const goTo = (link: string)=>{
  console.log(link)
}
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
