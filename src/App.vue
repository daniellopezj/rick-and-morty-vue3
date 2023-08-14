<template>
  <router-view />
</template>

<script lang="ts" setup>
import Cookies from "js-cookie";
import { onBeforeMount } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

onBeforeMount(() => {
  const themeName = Cookies.get("theme");
  if (themeName) {
    theme.global.name.value = themeName;
  }
});
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
