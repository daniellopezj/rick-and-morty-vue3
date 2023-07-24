<template>
  <v-container>
    <div>
      <div class="containeritems">
        <CharacterCard
        class="card"
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </div>
      <v-pagination
        v-model="page"
        :length="optionsParams?.pages"
        @update:model-value="fetchDataCharacters()"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import Character from "@/app/domain/Character";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterCard from "@/components/home/CharacterCard.vue";
import { PaginationItems } from "@/utils/general.types";
import { ref, Ref, onBeforeMount } from "vue";

const page = ref(1);
const optionsParams: Ref<PaginationItems | null> = ref(null);
const characters = ref<Character[]>([]);

onBeforeMount(async () => {
  const response = await CharacterRepository.fetchMany();
  if (response) {
    optionsParams.value = response.info;
    characters.value = Character.many(response.results as CharacterResponse[]);
  }
});

const fetchDataCharacters = () => {};
</script>

<style lang="scss" scoped>
.containeritems {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
}

</style>
