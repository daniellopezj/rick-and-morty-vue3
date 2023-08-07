<template>
  <div class="locationCard__container">
    <span class="locationCard__name"> {{ location.name }}</span>
    <span class="locationCard__type">tipo: {{ location.type }}</span>
    <span class="locationCard__dimension"
      >dimension: {{ location.dimension }}</span
    >
  </div>
</template>

<script setup lang="ts">
import Location from "@/app/domain/Location";
import { PropType } from "vue";
defineProps({
  location: {
    type: Object as PropType<Location>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.locationCard {
  &__container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    background-color: yellow;
    color: rgb(var(--v-theme-on-background));
    border: 3px solid rgb(var(--v-theme-on-background));
    background-color: rgb(var(--v-theme-locationCard));
    text-align: center;
    padding: 1rem 0;
  }

  &__container:hover {
    opacity: 0.75;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: bold;
  }
  &__type {
    font-size: 1.1rem;
    font-weight: bold;
    color: rgb(var(--v-theme-background));
    background-color: rgb(var(--v-theme-on-background));
  }

  &__dimension {
    font-size: 0.85rem;
    opacity: 0.75;
  }
}
</style>
