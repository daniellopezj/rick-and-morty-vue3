<template>
  <v-container>
    <div v-if="!pending">
      <div class="containeritems">
        <EpisodeCard
          class="card"
          v-for="episode in episodes"
          :key="episode.id"
          :episode="episode"
          @click="() => router.push(`/episode/${episode.id}`)"
        />
      </div>
      <v-pagination
        v-model="page"
        class="containerPagination"
        :length="optionsParams?.pages"
        @update:model-value="fetchDataEpisodes()"
      ></v-pagination>
    </div>
    <div v-else class="custom__progressbar">
      <v-progress-circular :size="100" color="primary" indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import Episode from "@/app/domain/Episode";
import EpisodeResponse from "@/app/infrastructure/response/EpisodeResponse";
import EpisodeRepository from "@/app/infrastructure/repository/EpisodeRepository";
import EpisodeCard from "@/components/episode/EpisodeCard.vue";
import { PaginationItems, PaginationParams } from "@/utils/general.types";
import { ref, Ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const page = ref(1);
const optionsParams: Ref<PaginationItems | null> = ref(null);
const episodes = ref<Episode[]>([]);
const pending = ref(true);

const fetchDataFromApi = async (page: number) => {
  pending.value = true;
  const { data } = await EpisodeRepository.fetchMany({
    page: page,
  });

  if (data) {
    const newData = data as PaginationParams;
    optionsParams.value = newData.info;
    episodes.value = Episode.many(newData.results as EpisodeResponse[]);
  }
  pending.value = false;
};

watch(page, () => fetchDataFromApi(page.value), { immediate: true });

const fetchDataEpisodes = () => {};
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
