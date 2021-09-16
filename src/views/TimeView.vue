<template lang="pug">
AppLoader(v-if='isLoading')

div(v-else, :class='$style.content')
  Master(v-if='master', :master='master', isCanChanged)

  div(:class='$style.contentDate')
    div(:class='$style.calendar')
      h3(:class='$style.calendarTitle') Выберите дату
      AppCalendar(@changeCalendar='changeCalendar')

    div(:class='$style.hoursList')
      div(v-if='isHourLoading') Загрузка
      HoursList(v-if='!isHourLoading && date', :list='time')

    router-link(v-if='hour', to='/order/')
      AppButton(text='Выбрать', @click='handleButton')
</template>

<script>
import { computed, onMounted, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

import Master from '@Components/common/Masters/Master';
import HoursList from '@Components/common/Masters/HoursList';
import AppButton from '@UI/Button';
import AppCalendar from '@UI/Calendar';
import AppLoader from '@UI/Loader';

export default {
  components: {
    Master,
    HoursList,
    AppButton,
    AppCalendar,
    AppLoader,
  },
  setup() {
    const { state, dispatch, commit } = useStore();

    const master = computed(() => state.masters.master);
    const time = computed(() => state.order.time);
    const hour = computed(() => state.order.hour);
    const date = computed(() => state.order.date);
    const isHourLoading = computed(() => state.order.isHourLoading);
    const isLoading = computed(() => state.masters.isLoading);

    const masterID = localStorage.getItem('masterSelected');

    const fetchMaster = () => {
      dispatch('getMaster', masterID);
    };

    const changeCalendar = (value) => {
      commit('setDate', value);
      dispatch('getTime', masterID);
    };

    const handleButton = () => {
      commit('setStepAvailable', 4);
    };

    onBeforeMount(() => {
      commit('setMaster', null);
      commit('setHour', null);
      commit('setDate', null);
    });

    onMounted(() => {
      fetchMaster();
    });

    return {
      master,
      time,
      hour,
      date,
      isLoading,
      isHourLoading,
      changeCalendar,
      handleButton,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/pages/TimeView.scss">
</style>