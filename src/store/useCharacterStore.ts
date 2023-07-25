// Utilities
import Character from '@/app/domain/Character';
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';

export const useCharacterStore = defineStore('characterStore', ()=>{
  const character: Ref<Character | null> = ref(null);

  function setCharacter(newCharacter: Character) {
    character.value = newCharacter;
  }

  function getCharacter(){
    return character.value
  }

  return {
    setCharacter,
    getCharacter,
    character,
  };
})
