<template>
  <div>hola</div>
</template>

<script setup lang="ts">
import Character from "@/app/domain/Character";
import CharacterRepository from "@/app/infrastructure/repository/CharacterRepository";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
import { ref } from "vue";
import { Ref } from "vue";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const character: Ref<Character> = ref(new Character());

onBeforeMount(async () => {
  const { error, data } = await CharacterRepository.fetchOne(
    route.params.idCharacter as string
  );
  if (data) {
    character.value = Character.one(data as CharacterResponse);
    console.log(character.value);
  }
  if (error) {
    console.log(error);
  }
});
</script>

<style scoped lang="scss"></style>
