<template>
  <div class="episodeCard__container">
    <span class="episodeCard__session">{{ episode.episode }}</span>
    <span class="episodeCard__name">{{ episode.name }}</span>
    <span class="episodeCard__date">
      Estreno: <span>{{ episode.airDate }}</span></span
    >
  </div>
</template>

<script setup lang="ts">
import Episode from "@/app/domain/Episode";
import { PropType } from "vue";
defineProps({
  episode: {
    type: Object as PropType<Episode>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.episodeCard {
  &__container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    background-color: rgb(var(--v-theme-episodeCard));
    color: rgb(var(--v-theme-on-background));
    border: 3px solid rgb(var(--v-theme-on-background));
    text-align: center;
    padding: 1rem;
  }

  &__container:hover {
    opacity: 0.75;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: bold;
  }

  &__date {
    font-size: 0.85rem;
    opacity: 0.75;
  }
}
</style>
