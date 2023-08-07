<template>
  <v-container class="global__container">
    <div v-if="!pending">
      <div class="characters__input-container">
        <v-text-field class="characters__input-element" :label="'Buscar Personaje'" variant="underlined" density="compact"
          :prepend-inner-icon="mdiMagnify" @input="searchHandle($event)" />
      </div>
      <div v-if="characters.length">
        <div class="characters__list">
          <character-card class="characters__card" v-for="character in characters" :key="character.id"
            :character="character" />
        </div>
        <div v-if="optionsParams">
          <v-pagination v-if="optionsParams.pages > 1" v-model="page" rounded="circle" class="pagination"
            :length="optionsParams?.pages" @update:model-value="fetchDataFromApi()"></v-pagination>
        </div>
      </div>
      <div v-else class="characters__empty">
        <h2>No se encontraron personajes</h2>
        <div class="characters__empty__image-container">
          <v-img alt="list-empty" cover src="/empty-character.png" />
        </div>

      </div>
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
import { mdiMagnify } from '@mdi/js'

const page = ref(1);
const optionsParams: Ref<PaginationItems | null> = ref(null);
const characters = ref<Character[]>([]);
const pending = ref(true);
const query = ref('')


const fetchDataFromApi = async (loadingPage = true) => {
  if (loadingPage && !query.value) {
    pending.value = true;
  }
  const { data, error } = await CharacterRepository.search({
    name: query.value,
    page: page.value,
  });
  if (error) {
    characters.value = []
    optionsParams.value = null
  }
  if (data) {
    const newData = data as PaginationParams;
    optionsParams.value = newData.info;
    characters.value = Character.many(newData.results as CharacterResponse[]);
  }
  pending.value = false;
};

const searchHandle = (event: Event) => {
  query.value = (event.target as HTMLInputElement).value;
  page.value = 1
  fetchDataFromApi(false);
};


watch(page, () => fetchDataFromApi(false), { immediate: true });
</script>

<style lang="scss" scoped>
.characters {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 4rem;
  }

  &__empty {
    display: grid;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    &__image {
      &-container {
        min-width: 400px;

      }
    }
  }

  &__card {
    opacity: 0.9;
  }

  &__input {
    &-container {
      display: flex;
      justify-content: flex-end;
    }

    &-element {
      max-width: 30%;
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .characters {
    &__input {
      &-container {
        justify-content: flex-start;
      }

      &-element {
        max-width: 100%;
      }
    }
  }
}


@media (max-width: 599px) {
  .characters {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: auto;
    }

    &__empty {


      &__image {
        &-container {
          min-width: 300px;
        }
      }
    }

    &__input {
      &-container {
        display: flex;
        justify-content: flex-start;
      }

      &-element {
        max-width: 100%;
      }
    }
  }
}
</style>
