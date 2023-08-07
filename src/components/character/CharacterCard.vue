<template>
  <div
    class="characterCard__container"
    @click="() => router.push(`/character/${character.id}`)"
  >
    <div class="characterCard__content">
      <v-img
        alt="character"
        :class="{
          'characterCard__image-alive': status?.value === 'alive',
          'characterCard__image-dead': status?.value === 'dead',
          'characterCard__image-unknown': status?.value === 'unknown',
        }"
        class="characterCard__image"
        :src="character.image"
      >
      </v-img>
      <span
        class="characterCard__status"
        :class="{
          'characterCard__status-alive': status?.value === 'alive',
          'characterCard__status-dead': status?.value === 'dead',
          'characterCard__status-unknown': status?.value === 'unknown',
        }"
      >
        {{ status?.title }}
      </span>
    </div>
    <span class="characterCard__name"> {{ character.name }}</span>
    <span class="characterCard__specie"> {{ character.species }}</span>
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import { PropType, computed } from "vue";
import { CharacterStatus } from "@/types/general.types";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const status = computed(() =>
  CharacterStatus.find(
    (i) => i.value.toUpperCase() === props.character.status.toUpperCase()
  )
);
</script>

<style scoped lang="scss">
.characterCard {
  &__container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
  }

  &__content {
    position: relative;
  }

  &__image {
    border-radius: 50%;
    &-alive {
      border: 5px solid green;
    }
    &-dead {
      border: 5px solid red;
    }
    &-unknown {
      // border: 5px solid rgb(180, 159, 2);
      border: 5px solid rgb(23, 2, 180);
    }
  }

  &__name {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
  &__specie {
    font-size: 0.85rem;
    opacity: 0.75;
  }

  &__status {
    border: 1px solid rgba(var(--v-theme-surfase));
    position: absolute;
    text-transform: capitalize;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%);
    z-index: 1;
    font-weight: bold;
    color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1.2rem;
    border-radius: 200px;

    &-alive {
      background-color: green;
    }
    &-dead {
      background-color: red;
    }
    &-unknown {
      background-color: rgb(23, 2, 180);
    }
  }
}
</style>
