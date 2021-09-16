<template lang="pug">
AppLoader(v-if='isLoading')
Salons(v-else, :list='salonsList')
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import Salons from '@Components/common/Salons/Salons';
import AppLoader from '@UI/Loader';

export default {
  components: {
    Salons,
    AppLoader,
  },
  setup() {
    const store = useStore();
    const salonsList = computed(() => store.state.salons.salonsList);
    const isLoading = computed(() => store.state.salons.isLoading);

    const fetchSalons = () => {
      store.dispatch('getSalons');
    };

    onMounted(() => {
      fetchSalons();
    });

    return {
      salonsList,
      isLoading,
    };
  },
};
</script>