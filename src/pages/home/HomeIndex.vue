<script setup>
import ContentCard from "src/components/ContentCard.vue";
import { useContentStore } from "src/stores/content";

const contentStore = useContentStore();
</script>

<template>
  <div class="row full-width items-start justify-start q-pa-lg q-col-gutter-lg">
    <template v-for="(item, index) in contentStore.data" :key="index">
      <div class="col-lg-3 col-md-4 col-sm-6 col-12 content_card_wrapper">
        <ContentCard
          :title="item.title"
          :subtitle="item.subtitle"
          :imageUrl="item.image"
          :views="item.views"
        />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
@media (min-width: $breakpoint-lg) {
  .content_card_wrapper {
    max-width: 25rem !important;
  }
}
</style>
