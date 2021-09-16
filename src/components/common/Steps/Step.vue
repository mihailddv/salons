<template lang="pug">
router-link(:to='link', @click.capture='handleRout')
  button(:class='$style.container', :disabled='disabled')
    div(:class='$style.number') {{ number }}
    div(:class='$style.text') {{ text }}
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    text: String,
    number: Number,
    link: String,
    disabled: Boolean,
  },

  setup(props) {
    const isDisabled = computed(() => props.disabled);

    const handleRout = (e) => {
      if (isDisabled.value) {
        e.preventDefault();
      }
    };

    return {
      isDisabled,
      handleRout,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Step.scss">
</style>