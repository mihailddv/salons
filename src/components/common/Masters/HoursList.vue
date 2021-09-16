<template lang="pug">
div(:class='$style.container')
  label(:class='$style.item', v-for='item in list', :key='item.hour')
    input(
      :class='$style.itemRadio',
      type='radio',
      name='hour',
      :disabled='!item.avialable',
      @click='handleHour(item.hour)'
    )
    div(:class='$style.itemContent')
      span {{ item.hour }}
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import AppButton from '@UI/Button';
import AppCard from '@UI/Card';

export default {
  props: {
    list: Array,
  },
  components: {
    AppButton,
    AppCard,
  },
  setup(props) {
    const store = useStore();

    const hour = computed(() => props.list.hour);

    const handleHour = (hour) => {
      store.commit('setHour', hour);
    };

    return {
      hour,
      handleHour,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/HoursList.scss">
</style>