<template>
  <div class="characterCard__container">
    <v-img class="characterCard__image" :src="character.image"> </v-img>
    <div>name {{ character.name }}</div>
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import { PropType } from "vue";

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

</script>

<style scoped lang="scss">
.characterCard {
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-radius: 8px;
    background-color: rgb(60, 62, 68);
  }
  &__image{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

  }
}
</style>
