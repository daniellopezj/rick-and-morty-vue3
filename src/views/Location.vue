<template>
  <v-container v-if="loaded" class="global__container">
    <div class="location__detail">
    <location-card :location="location"/>
   </div>
    <location-character-list :location="location" />
  </v-container>
  <div v-else class="custom__progressbar">
    <v-progress-circular :size="100" color="primary" indeterminate />
  </div>
</template>

<script setup lang="ts">
import Location from "@/app/domain/Location";
import LocationRepository from "@/app/infrastructure/repository/LocationRepository";
import LocationResponse from "@/app/infrastructure/response/LocationResponse";
import LocationCharacterList from "@/components/location/LocationCharacterList.vue";
import LocationCard from "@/components/location/LocationCard.vue";
import { useLocationStore } from "@/store/useLocationStore";
import { ref, Ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const location: Ref<Location> = ref(new Location());
const loaded = ref(false);
const locationStore = useLocationStore();

onBeforeMount(async () => {
  if (locationStore.location?.id === Number(route.params.idLocation)) {
    location.value = locationStore.location;
    loaded.value = true;
  } else {
    const { error, data } = await LocationRepository.fetchOne(
      route.params.idLocation as string
    );
    if (data) {
      location.value = Location.one(data as LocationResponse);
      locationStore.setLocation(location.value);
      loaded.value = true;
    }
    if (error) {
      router.push({ name: "not-found" });
    }
  }
});
</script>

<style scoped lang="scss">
.location {
  &__detail{
    max-width: 350px;
    margin: auto;
}
}
</style>
