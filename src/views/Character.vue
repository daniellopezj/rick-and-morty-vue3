<template>
  <v-container v-if="loaded" class="character__container">
    <CharacterDetail :character="character" />
    <CharacterEpisodeList :character="character" />
  </v-container>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import CharacterDetail from "@/components/character/CharacterDetail.vue";
import CharacterEpisodeList from "@/components/character/CharacterEpisodeList.vue";
import { ref, Ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const character: Ref<Character> = ref(new Character());
const loaded = ref(false);

onBeforeMount(async () => {
  const { error, data } = await CharacterRepository.fetchOne(
    route.params.idCharacter as string
  );
  if (data) {
    character.value = Character.one(data as CharacterResponse);
    loaded.value = true;
  }
  if (error) {
    console.log(error);
  }
});
</script>

<style scoped lang="scss">
.character {
  &__container {
    max-width: 1200px;
  }
}
</style>
