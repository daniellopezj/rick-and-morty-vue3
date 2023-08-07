<template>
  <v-container class="global__container">
    <div class="notFound__container">
      <span class="notFound__title">Ooops!!</span>
      <div class="notFound__image-container">
        <v-img alt="not-found" cover src="/not-found.png" />
      </div>
      <span class="notFound__sub-title"
        >No encontramos la página que buscas</span
      >
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.notFound {
  &__container {
    display: grid;
    gap: 2rem;
    justify-content: center;
    text-align: center;
  }

  &__title {
    font-size: 5rem;
    font-weight: bold;
  }

  &__sub-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__image {
    &-container {
      max-width: 400px;
    }
  }
}

@media (max-width: 599px) {
  .notFound {
    &__container {
      gap: 1rem;
    }

    &__title {
      font-size: 2.5rem;
    }

    &__sub-title {
      font-size: 1.2rem;
    }

    &__image {
      &-container {
        max-width: 100%;
      }
    }
  }
}
</style>
