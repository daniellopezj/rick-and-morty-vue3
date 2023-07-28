<template>
  <v-container class="global__container">
    <div v-if="!pending">
      <div class="characters__list">
        <character-card
          class="card"
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </div>
      <v-pagination
        v-model="page"
        rounded="circle"
        class="pagination"
        :length="optionsParams?.pages"

      ></v-pagination>
    </div>
    <div v-else class="custom__progressbar">
      <v-progress-circular :size="100" color="primary" indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import Character from "@/app/domain/Character";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterCard from "@/components/character/CharacterCard.vue";
import { PaginationItems, PaginationParams } from "@/types/general.types";
import { ref, Ref, watch } from "vue";

const page = ref(1);
const optionsParams: Ref<PaginationItems | null> = ref(null);
const characters = ref<Character[]>([]);
const pending = ref(true);

const fetchDataFromApi = async (page: number) => {
  pending.value = true;
  const { data } = await CharacterRepository.fetchMany({
    page: page,
  });

  if (data) {
    const newData = data as PaginationParams;
    optionsParams.value = newData.info;
    characters.value = Character.many(newData.results as CharacterResponse[]);
  }
  pending.value = false;
};

watch(page, () => fetchDataFromApi(page.value), { immediate: true });
</script>

<style lang="scss" scoped>
.characters__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4rem;
}

.card:hover {
  opacity: 0.9;
}

@media (max-width: 599px) {
  .characters__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: auto;
  }
}
</style>
