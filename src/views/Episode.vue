<template>
  <v-container v-if="loaded" class="character__container">
    Episodio

    <episode-character-list :episode="episode" />
  </v-container>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Episode from "@/app/domain/Episode";
import EpisodeRepository from "@/app/infrastructure/repository/EpisodeRepository";
import EpisodeResponse from "@/app/infrastructure/response/EpisodeResponse";
import EpisodeCharacterList from "@/components/episode/detail/EpisodeCharacterList.vue";
import { useEpisodeStore} from "@/store/useEpisodeStore";
import { ref, Ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const episode: Ref<Episode> = ref(new Episode());
const loaded = ref(false);
const episodeStore = useEpisodeStore();

onBeforeMount(async () => {
  if (episodeStore.episode?.id === Number(route.params.idEpisode)) {
    episode.value = episodeStore.episode;
    loaded.value = true;
  } else {
    const { error, data } = await EpisodeRepository.fetchOne(
      route.params.idEpisode as string
    );
    if (data) {
      episode.value = Episode.one(data as EpisodeResponse);
      episodeStore.setEpisode(episode.value);
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
}
</style>
