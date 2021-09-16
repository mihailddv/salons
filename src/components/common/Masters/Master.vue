<template lang="pug">
AppCard(:image='image', :name='name')
  h2(:class='$style.name') {{ name }}

  h4(:class='$style.description') {{ description }}

  div(:class='$style.actions')
    router-link(v-if='isCanChanged', to='/')
      AppButton(text='Изменить', styled='danger') 
    router-link(v-else, to='/time/')
      AppButton(@click='handleButton(masterID)', text='Выбрать')
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import AppButton from '@UI/Button';
import AppCard from '@UI/Card';

export default {
  props: {
    master: Array,
    isCanChanged: Boolean,
  },
  components: {
    AppButton,
    AppCard,
  },
  setup(props) {
    const { commit } = useStore();

    const masterID = computed(() => props.master.id);
    const image = computed(() => props.master.image);
    const name = computed(() => props.master.fio);
    const description = computed(() => props.master.description);

    const handleButton = (id) => {
      localStorage.setItem('masterSelected', id);
      commit('setStepAvailable', 3);
    };

    return {
      image,
      name,
      description,
      masterID,
      handleButton,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Master.scss">
</style>