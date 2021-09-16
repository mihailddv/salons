<template lang="pug">
Container
  div(:class='$style.caption')
    Steps

  div(:class='$style.content')
    slot
</template>


<script>
import Steps from '@Components/common/Steps/Steps';
import Container from '@Components/layout/Container';
export default {
  name: 'DefaultLayoutVue',
  components: {
    Steps,
    Container,
  },
};
</script>

<style lang="scss" module>
.caption {
  padding: 20px 0;
}

.content {
  padding-bottom: 40px;
}
</style>