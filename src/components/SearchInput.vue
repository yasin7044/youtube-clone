<script setup>
import { useContentStore } from "src/stores/content";
const contentStore = useContentStore();
</script>

<template>
  <div class="row no-wrap" style="width: 40%" v-bind="$attrs">
    <q-input
      rounded
      outlined
      class="search-input text-subtitle-1 full-width"
      placeholder="Search"
      v-model="contentStore.search"
    >
      <template v-slot:append>
        <q-icon name="keyboard" class="q-mr-sm" />
        <q-btn
          class="full-height q-px-lg search-btn"
          color="grey-3"
          text-color="grey-8"
          icon="search"
          bordered
          rounded
          unelevated
        />
      </template>
    </q-input>
    <q-btn round dense flat color="grey-8" class="q-mx-sm" icon="mic">
      <q-tooltip>Menu</q-tooltip>
    </q-btn>
  </div>
</template>
