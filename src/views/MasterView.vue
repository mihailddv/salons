<template lang="pug">
AppLoader(v-if='isLoading')
Masters(v-else, :list='mastersList')
</template>

<script>
import { computed, onMounted, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

import Masters from '@Components/common/Masters/Masters';
import AppLoader from '@UI/Loader';

export default {
  components: {
    Masters,
    AppLoader,
  },
  setup() {
    const store = useStore();

    const mastersList = computed(() => store.state.masters.mastersList);
    const isLoading = computed(() => store.state.masters.isLoading);

    const salonID = localStorage.getItem('salonSelected');

    const fetchMasters = () => {
      store.dispatch('getAllMasters', salonID);
    };

    onBeforeMount(() => {
      store.commit('setAllMasters', null);
    });

    onMounted(() => {
      fetchMasters();
    });

    return {
      salonID,
      mastersList,
      isLoading,
    };
  },
};
</script>

<style lang="scss" module>
</style>