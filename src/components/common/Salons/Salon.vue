<template lang="pug">
AppCard(:image='image', :name='address')
  div(:class='$style.address') {{ address }}
  div(:class='$style.workTime')
    div(:class='$style.workTime__title') Время работы
    table(:class='$style.workTime__table')
      tbody
        tr(v-for='time in workTime')
          td {{ time.day }}
          td {{ time.worktime }}

  div(:class='$style.actions')
    router-link(to='/master/')
      AppButton(@click='handleButton(salonID)', text='Выбрать')
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import AppButton from '@UI/Button';
import AppCard from '@UI/Card';

export default {
  props: {
    salon: Array,
  },
  components: {
    AppButton,
    AppCard,
  },
  setup(props) {
    const { commit } = useStore();

    const image = computed(() => props.salon.image);
    const address = computed(() => props.salon.address);
    const workTime = computed(() => props.salon.time);
    const salonID = computed(() => props.salon.id);

    const handleButton = (id) => {
      localStorage.setItem('salonSelected', id);
      commit('setStepAvailable', 2);
    };

    return {
      image,
      address,
      workTime,
      salonID,
      handleButton,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Salon.scss">
</style>