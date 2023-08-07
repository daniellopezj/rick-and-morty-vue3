<template>
  <v-container class="home__container">
    <div class="home__content">
      <v-img alt="name" cover class="home__image-name" src="/name.png" />
      <v-img alt="home" cover class="home__image-main" src="/home.png" />
      <div class="home__navigation">
        <span
          :key="link.id"
          @click="router.push(link.path)"
          v-for="link in links"
        >
          {{ link.title }}
        </span>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const links = [
  { id: 1, title: "Personajes", path: "/character" },
  { id: 2, title: "Capitulos", path: "/episode" },
  { id: 3, title: "Ubicaciones", path: "/location" },
];
</script>

<style scoped lang="scss">
.home {
  &__container {
    margin: 0 auto;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__image {
    &-name {
      width: 50%;
      margin-top: -5%;
      height: min-content;
      max-width: 600px;
    }
    &-main {
      width: 600px;
      max-width: 600px;
    }
  }
  &__navigation {
    margin-top: 2rem;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    span {
      padding-right: 10px;
      border-right: 2px solid  rgb(var(--v-theme-textActive));
      color: rgb(var(--v-theme-textActive));
      font-size: 1.1rem;
      font-weight: bold;
      opacity: 0.85;
    }
  }
}

@media (max-width: 599px) {
  .home {
    &__image {
      &-name {
        width: 100%;
      }
      &-main {
        width: 100%;
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .home {
    &__image {
      &-name {
        width: 80%;
        margin-top: -5%;
        height: min-content;
      }
      &-main {
        width: 600px;
      }
    }
  }
}

@media (min-width: 960px) {
  .home {
    &__navigation {
      display: none;
    }
  }
}
</style>
