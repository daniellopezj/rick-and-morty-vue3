<template>
  <div v-if="loaded">
    <h2 class="mt-4 mb-2">Episodios</h2>
    <div class="episodes__container" v-if="episodes.length">
      <EpisodeCard v-for="episode in episodes" :key="episode.id" :episode="episode"
        @click="() => router.push(`/episode/${episode.id}`)" />
    </div>
  </div>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import Episode from "@/app/domain/Episode";
import EpisodeRepository from "@/app/infrastructure/repository/EpisodeRepository";
import EpisodeResponse from "@/app/infrastructure/response/EpisodeResponse";
import EpisodeCard from "@/components/episode/EpisodeCard.vue";
import { ref, onMounted, PropType } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const router = useRouter();
const episodes = ref<Episode[]>([]);
const loaded = ref(false);
const extractIdEpisode = () => {
  return props.character.episode.map((i) => i.split("/").pop()).join(",");
};

onMounted(async () => {
  const listEpisodes = extractIdEpisode();
  const { data } = await EpisodeRepository.fetchByCharacter(
    listEpisodes
  );
  if (data) {
    if (Array.isArray(data)) {
      episodes.value = Episode.many(data as EpisodeResponse[]);
    } else {
      episodes.value = [Episode.one(data as EpisodeResponse)];
    }
  }
  loaded.value = true;
});
</script>

<style scoped lang="scss">
.episodes {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
  }
}


@media (max-width: 599px) {
  .episodes__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: auto;
  }
}
</style>
