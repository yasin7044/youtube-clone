<script setup>
defineProps({
  title: {
    type: String,
    default: () => "<Card title>",
  },
  subtitle: {
    type: String,
    default: () => "<Card subtitle>",
  },
  views: {
    type: Number,
    default: () => 0,
  },
  imageUrl: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <q-card flat class="full-width border-radius-10 bg-transparent">
    <q-card-section class="q-pa-none">
      <q-img :src="imageUrl" alt="x" class="border-radius-10" />
    </q-card-section>
    <q-card-section class="q-px-sm">
      <h6 class="q-my-none">{{ title }}</h6>
      <p class="text-subtitle-1 q-mb-none">{{ subtitle }}</p>
      <p class="text-subtitle-2 q-mb-none">{{ views }} views</p>
    </q-card-section>
  </q-card>
</template>

<style lang="scss">
.border-radius-10 {
  border-radius: 10px;
}
</style>
