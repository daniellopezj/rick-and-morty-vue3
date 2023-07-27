<template>
  <v-footer color="background" class="appfooter__container">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>
      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        class="mx-4"
        :icon="icon.icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
</script>

<style scoped lang="scss">
.appfooter {
  &__container {
    padding: 0;
    display: flex;
  }
}
</style>
