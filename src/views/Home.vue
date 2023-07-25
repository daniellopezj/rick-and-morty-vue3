<template>
  <v-container>
    <div v-if="!pending">
      <div class="containeritems">
        <CharacterCard
          class="card"
          v-for="character in characters"
          :key="character.id"
          :character="character"
          @click="() => router.push(`/character/${character.id}`)"
        />
      </div>
      <v-pagination
        v-model="page"
        class="containerPagination"
        :length="optionsParams?.pages"
        @update:model-value="fetchDataCharacters()"
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
import CharacterCard from "@/components/home/CharacterCard.vue";
import { PaginationItems, PaginationParams } from "@/utils/general.types";
import { ref, Ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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

const fetchDataCharacters = () => {};
</script>

<style lang="scss" scoped>
.containeritems {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
}

.containerPagination {
  margin: 2rem auto;
  max-width: 40%;
}
.card:hover {
  opacity: 0.85;
}
</style>
