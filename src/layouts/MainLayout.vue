<script setup>
import MainNavbar from "components/MainNavbar.vue";
import MainSidebar from "src/components/MainSidebar.vue";

import { shallowRef } from "vue";

const sidebarMiniMode = shallowRef(true);
const sidebarOpen = shallowRef(true);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

function toggleSidebarMiniMode() {
  sidebarMiniMode.value = !sidebarMiniMode.value;
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <MainNavbar
        @hamburgerClick="toggleSidebarMiniMode"
        @toggleSidebar="toggleSidebar"
      />
    </q-header>

    <MainSidebar v-model="sidebarOpen" :miniMode="sidebarMiniMode" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
