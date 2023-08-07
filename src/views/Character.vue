<template>
  <v-container v-if="loaded" class="character__container">
    <div class="character__detail">
      <character-card :character="character" />
    </div>
    <character-episode-list :character="character" />
  </v-container>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import CharacterCard from "@/components/character/CharacterCard.vue";
import CharacterEpisodeList from "@/components/character/CharacterEpisodeList.vue";
import { useCharacterStore } from "@/store/useCharacterStore";
import { ref, Ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const character: Ref<Character> = ref(new Character());
const loaded = ref(false);
const characterStore = useCharacterStore();

onBeforeMount(async () => {
  if (characterStore.character?.id === Number(route.params.idCharacter)) {
    character.value = characterStore.character;
    loaded.value = true;
  } else {
    const { error, data } = await CharacterRepository.fetchOne(
      route.params.idCharacter as string
    );
    if (data) {
      character.value = Character.one(data as CharacterResponse);
      characterStore.setCharacter(character.value);
      loaded.value = true;
    }
    if (error) {
      router.push({ name: "not-found" });
    }
  }
});
</script>

<style scoped lang="scss">
.character {
  &__container {
    max-width: 1200px;
  }
  &__detail {
    max-width: 350px;
    margin: auto;
  }
}

@media (max-width: 599px) {
  .character {
    &__detail {
      max-width: 250px;
      margin: auto;
    }
  }
}
</style>
