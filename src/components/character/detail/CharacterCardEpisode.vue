<template>
  <div class="cardEpisode__container">
    <span>
      {{ episode.episode }}
    </span>
    <span>
      {{ episode.name }}
    </span>
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
.cardEpisode__container {
  display: flex;
  flex-direction: column;
  background-color: #29432a;
  border-radius: 8px;
  padding: 16px;
  min-width: 150px;
  :first-child {
    font-weight: bold;
    font-size: 1.1rem;
  }
}
.cardEpisode__container:hover {
  // border: 1px solid white;
  cursor: pointer;
  transform: scale(1.1);
}


</style>
