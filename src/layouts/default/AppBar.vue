<template>
  <v-app-bar>
    <v-img @click="()=> router.push('/')" cover class="logo" src="/logo.svg" />
    <v-app-bar-title style="cursor: pointer;" @click="()=> router.push('/')"> Ricky and Morty </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import {  useRouter } from 'vue-router';
const router = useRouter();
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
