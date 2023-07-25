<template>
  <div class="locationCard__container">
    <div>name {{ location.name }}</div>
    <div>type {{ location.type }}</div>
    <div>dimension {{ location.dimension }}</div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-radius: 8px;
    background-color: rgb(60, 62, 68);
  }
  &__image {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>
