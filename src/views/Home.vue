<template>
  <v-container class="home__container">
    <div class="home__content">
      <v-img cover class="icon" src="/name.png" />
      <v-img cover class="both" src="/home.png" />
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home__container {
  margin: 0 auto;
}
.home__content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 50%;
  margin-top: -5%;
  height: min-content;
}
.both {
  width: 600px;
}
.character {
  &__container {
    max-width: 1200px;
  }
}
</style>
