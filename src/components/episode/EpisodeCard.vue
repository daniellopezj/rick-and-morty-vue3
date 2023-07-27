<template>
  <div class="episodeCard__container">
    <div>name {{ episode.name }}</div>
    <div>name {{ episode.airDate }}</div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-radius: 8px;
    background-color: rgb(60, 62, 68);
  }
}
</style>
