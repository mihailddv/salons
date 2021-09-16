<template lang="pug">
div(:class='$style.container')
  datepicker(v-model='picked', :locale='ru')
</template>

<script>
import Datepicker from 'vue3-datepicker';
import { ref, watch } from 'vue';
import { ru } from 'date-fns/locale';

export default {
  components: {
    Datepicker,
  },
  setup(_, { emit }) {
    const picked = ref();

    const handleCalendar = (event) => {
      emit('changeCalendar', event);
    };

    watch(picked, () => {
      handleCalendar(picked.value);
    });

    return {
      picked,
      ru,
      handleCalendar,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Calendar.scss">
</style>