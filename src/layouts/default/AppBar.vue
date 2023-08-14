<template>
  <v-app-bar color="background" elevation="0" class="topbar__container">
    <v-img
      @click="() => router.push('/')"
      class="topbar__logo"
      src="/logo.svg"
      alt="logo"
      rel="preload"
    />
    <ul v-if="!mobile" class="topbar__navigation">
      <li
        :class="{ topbar__active: link.id === activeLink }"
        :key="link.id"
        @click="router.push(link.path)"
        v-for="link in links"
      >
        {{ link.title }}
      </li>
    </ul>
    <div v-if="!mobile">
      <v-btn
      aria-label="theme"
        elevation="0"
        color="iconMode"
        class="topbar__theme"
        :icon="mdiThemeLightDark"
        @click="toogleTheme"
      />
    </div>
    <v-btn
    aria-label="menu"

    :rounded="4" v-if="mobile" icon @click="toggleDrawer">
      <v-icon :icon="mdiMenu"></v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    color="navigationDrawer"
    v-if="mobile"
    v-model="drawer"
    location="top"
    temporary
  >
    <ul class="topbar__navigation-small">
      <li
        :class="{ topbar__active: link.id === activeLink }"
        :key="link.id"
        @click="router.push(link.path)"
        v-for="link in links"
      >
        {{ link.title }}
      </li>
    </ul>
    <div class="topbar__theme">
      <v-btn
        elevation="0"
        color="iconMode"
        aria-label="theme"
        :icon="mdiThemeLightDark"
        @click="toogleTheme"
      />
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTheme } from "vuetify";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import { mdiMenu, mdiThemeLightDark } from '@mdi/js'

import Cookies from "js-cookie";

const router = useRouter();
const route = useRoute();
const drawer = ref(false);

const links = [
  { id: 0, title: "Inicio", path: "/" },
  { id: 1, title: "Personajes", path: "/character" },
  { id: 2, title: "Capitulos", path: "/episode" },
  { id: 3, title: "Ubicaciones", path: "/location" },
];

const activeLink = computed(() => {
  const index = links.findIndex((i) => {
    if (i.id > 0) {
      return route.path.includes(i.path);
    }
  });
  return index !== -1 ? index : 0;
});
const { mobile } = useDisplay();
const theme = useTheme();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const toogleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  Cookies.set("theme", theme.global.name.value);
};
</script>

<style lang="scss">
.topbar {
  &__container {
    display: flex;
    justify-content: space-between;
    .v-toolbar__content {
      justify-content: space-between;
    }
  }
  &__navigation {
    display: flex;
    gap: 2rem;
    li {
      padding: 0.5rem 0.5rem 0;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.1rem;
      opacity: 0.75;
    }
  }

  &__navigation-small {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    li {
      padding: 0.5rem;
      text-align: end;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.1rem;
      opacity: 0.75;
    }
  }
  &__active {
    opacity: 1;
    color: rgba(var(--v-theme-textActive), 1);
    border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
  }
  &__logo {
    max-height: 54px !important;
    max-width: 54px !important;
    margin-left: 1rem;
    cursor: pointer;
  }
}

@media (max-width: 599px) {
  .topbar {
    &__active {
      opacity: 1;
      border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
    }
    &__theme {
      display: flex;
      justify-content: center;
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .topbar {
    &__active {
      opacity: 1;
      border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
    }
    &__theme {
      display: flex;
      justify-content: center;
    }
  }
}

</style>
