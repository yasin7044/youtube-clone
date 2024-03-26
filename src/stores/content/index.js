import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";

export const useContentStore = defineStore("content", () => {
  const data = ref([
    {
      title: "Video 1",
      subtitle: "Video 1",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
    {
      title: "Video 2",
      subtitle: "Video 2",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 3",
      subtitle: "Video 3",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 4",
      subtitle: "Video 4",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
    {
      title: "Video 1",
      subtitle: "Video 1",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
    {
      title: "Video 2",
      subtitle: "Video 2",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 3",
      subtitle: "Video 3",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 4",
      subtitle: "Video 4",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
    {
      title: "Video 1",
      subtitle: "Video 1",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
    {
      title: "Video 2",
      subtitle: "Video 2",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 3",
      subtitle: "Video 3",
      image: "https://cdn.quasar.dev/img/parallax2.jpg",
      views: 200,
    },
    {
      title: "Video 4",
      subtitle: "Video 4",
      image: "https://cdn.quasar.dev/img/mountains.jpg",
      views: 200,
    },
  ]);
  const search = shallowRef("");

  const filterData = computed(() => {
    return data.value.filter((item) => {
      return item.title.toLowerCase().includes(search.value.toLowerCase());
    });
  });

  return { data: filterData, search };
});
