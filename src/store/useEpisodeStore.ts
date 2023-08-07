// Utilities
import Episode from "@/app/domain/Episode";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useEpisodeStore = defineStore("episodeStore", () => {
  const episode: Ref<Episode | null> = ref(null);

  function setEpisode(newEpisode: Episode) {
    episode.value = newEpisode;
  }

  function getEpisode() {
    return episode.value;
  }

  return {
    setEpisode,
    getEpisode,
    episode,
  };
});
