<template lang="pug">
div(:class='$style.container')
  Master(v-for='master in list', :master='master')
</template>

<script>
import Master from '@Components/common/Masters/Master';
export default {
  components: {
    Master,
  },
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" module>
@import '@Scss/component.scss';

.container {
  display: grid;
  justify-content: center;
  grid-gap: 20px;
}

@include desktop() {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>