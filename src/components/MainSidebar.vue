<script setup>
import { ref } from "vue";

defineProps({
  miniMode: {
    type: Boolean,
    default: () => true,
  },
});

const model = defineModel({
  type: Boolean,
  required: true,
});

const sidebarItems = ref([
  {
    label: "Home",
    icon: "home",
    route_name: "home",
  },
  {
    label: "Shorts",
    icon: "music_note",
    route_name: "shorts",
  },
  {
    label: "Subscriptions",
    icon: "subscriptions",
    route_name: "subscription",
  },
]);
</script>

<template>
  <q-drawer show-if-above v-model="model" :mini="miniMode" :width="240">
    <q-scroll-area class="fit" :class="{ 'q-px-sm': !miniMode }">
      <q-list padding>
        <template v-for="(item, index) in sidebarItems" :key="index">
          <q-item
            v-ripple
            clickable
            :to="{ name: item.route_name }"
            style="border-radius: 10px"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-grey">{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
