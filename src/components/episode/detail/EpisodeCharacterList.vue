<template>
  <div v-if="loaded">
    <h1 class="mt-4 mb-2">Personajes</h1>
    <div class="episodes__container" v-if="characters.length">
      <character-card
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import Episode from "@/app/domain/Episode";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import CharacterCard from '@/components/character/list/CharacterCard.vue'
import { ref, onMounted, PropType } from "vue";

const props = defineProps({
  episode: {
    type: Object as PropType<Episode>,
    required: true,
  },
});

const characters = ref<Character[]>([]);
const loaded = ref(false);
const extractIdEpisode = () => {
  return props.episode.characters.map((i) => i.split("/").pop()).join(",");
};

onMounted(async () => {
  const listEpisodes = extractIdEpisode();
  const { data } = await CharacterRepository.fetchByCharacter(
    listEpisodes
  );
  if (data) {
    if (Array.isArray(data)) {
      characters.value = Character.many(data as CharacterResponse[]);
    } else {
      characters.value = [Character.one(data as CharacterResponse)];
    }
  }
  loaded.value = true;
});
</script>

<style scoped lang="scss">
.episodes {
  &__container {
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    padding: 1rem 1.5rem;
    overflow-x: auto;
  }
}
</style>
