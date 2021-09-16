<template lang="pug">
button(
  :class='[$style.container, styled ? $style[styled] : ``]',
  v-on='$listeners'
) {{ text }}
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    text: String,
    styled: {
      type: String,
      default: 'primary',
    },
  },
  setup(props) {
    const styled = computed(() => props.styled);

    return {
      styled,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Button.scss">
</style>