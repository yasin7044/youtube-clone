<script setup>
import ytLogo from "src/assets/yt-logo.png";
import SearchInput from "src/components/SearchInput.vue";

const emit = defineEmits(["hamburgerClick", "toggleSidebar"]);
</script>

<template>
  <q-toolbar>
    <div class="row items-center full-width">
      <div class="col-12 row justify-between">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          color="grey"
          class="sm-hide xs-hide"
          @click="emit('hamburgerClick')"
        />

        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          color="grey"
          class="md-hide lg-hide xl-hide"
          @click="emit('toggleSidebar')"
        />

        <q-img :src="ytLogo" fit="fill" height="auto" width="10rem" />

        <q-space />

        <SearchInput class="sm-hide xs-hide" />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="more_vert">
            <q-tooltip>Menu</q-tooltip>
          </q-btn>

          <q-btn
            outline
            rounded
            color="primary"
            icon="account_circle"
            label="My account"
          />

          <q-btn round dense flat color="grey-8" icon="invert_colors">
            <q-tooltip>Theme</q-tooltip>
          </q-btn>
        </div>
      </div>
      <div class="col-12 md-hide lg-hide xl-hide">
        <SearchInput class="full-width" />
      </div>
    </div>
  </q-toolbar>
</template>

<style lang="scss">
.search-input {
  .q-field__control {
    padding-right: 0 !important;
    overflow: hidden;
    height: 40px;
    .search-btn {
      border: 1px solid rgba(0, 0, 0, 0.24);
    }
    .q-field__append {
      height: 100% !important;
    }
  }
}
</style>
