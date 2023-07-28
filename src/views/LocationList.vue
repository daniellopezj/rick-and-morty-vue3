<template>
  <v-container class="global__container">
    <div v-if="!pending">
      <div class="locationlist">
        <LocationCard
          class="card"
          v-for="location in locations"
          :key="location.id"
          :location="location"
          @click="() => router.push(`/location/${location.id}`)"
        />
      </div>
      <v-pagination
        v-model="page"
        rounded="circle"
        class="pagination"
        :length="optionsParams?.pages"
        @update:model-value="fetchDataLocations()"
      ></v-pagination>
    </div>
    <div v-else class="custom__progressbar">
      <v-progress-circular :size="100" color="primary" indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import Location from "@/app/domain/Location";
import LocationResponse from "@/app/infrastructure/response/LocationResponse";
import LocationRepository from "@/app/infrastructure/repository/LocationRepository";
import LocationCard from "@/components/location/LocationCard.vue";
import { PaginationItems, PaginationParams } from "@/types/general.types";
import { ref, Ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const page = ref(1);
const optionsParams: Ref<PaginationItems | null> = ref(null);
const locations = ref<Location[]>([]);
const pending = ref(true);

const fetchDataFromApi = async (page: number) => {
  pending.value = true;
  const { data } = await LocationRepository.fetchMany({
    page: page,
  });

  if (data) {
    const newData = data as PaginationParams;
    optionsParams.value = newData.info;
    locations.value = Location.many(newData.results as LocationResponse[]);
  }
  pending.value = false;
};

watch(page, () => fetchDataFromApi(page.value), { immediate: true });

const fetchDataLocations = () => {};
</script>

<style lang="scss" scoped>
.locationlist {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.containerPagination {
  margin: 2rem auto;
  max-width: 40%;
}
.card:hover {
  opacity: 0.85;
}

@media (max-width: 599px) {
  .locationlist {
    grid-template-columns: 1fr ;
  }
}
</style>

