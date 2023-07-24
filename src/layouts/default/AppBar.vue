<template>
  <v-app-bar>
    <v-img cover class="logo" src="/logo.svg" />
    <v-app-bar-title> Ricky and Morty </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.logo {
  max-height: 54px;
  max-width: 54px;
  margin-left: 1rem;
  cursor: pointer;
}

.header-title {
  display: flex;

  align-items: center;
}
</style>
