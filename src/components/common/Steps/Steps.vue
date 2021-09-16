<template lang="pug">
div(:class='$style.container')
  Step(
    v-for='item in stepsList',
    :key='item.id',
    :number='item.id',
    :text='item.title',
    :to='item.link',
    :disabled='item.disabled'
  )
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Step from '@Components/common/Steps/Step';
export default {
  components: {
    Step,
  },
  setup() {
    const { state, commit } = useStore();

    const stepsList = computed(() => state.steps.stepsList);

    const checkData = (data, step) => {
      if (localStorage.getItem(data)) {
        commit('setStepAvailable', step);
      }
    };

    checkData('salonSelected', 2);
    checkData('masterSelected', 3);
    checkData('masterSelected', 4);

    return {
      stepsList,
    };
  },
};
</script>

<style lang="scss" module>
@import '@Scss/component.scss';
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}

@include tablets() {
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
}
</style>