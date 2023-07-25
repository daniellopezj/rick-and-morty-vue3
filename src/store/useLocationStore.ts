// Utilities
import Location from '@/app/domain/Location';
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';

export const useLocationStore = defineStore('locationStore', ()=>{
  const location: Ref<Location | null> = ref(null);

  function setLocation(newLocation: Location) {
    location.value = newLocation;
  }

  function getLocation(){
    return location.value
  }

  return {
    setLocation,
    getLocation,
    location,
  };
})
